import { useState, useCallback } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { toast } from "sonner";

export const usePdfExport = () => {
  const [isExporting, setIsExporting] = useState(false);

  const exportToPdf = useCallback(async () => {
    setIsExporting(true);
    toast.info("Preparing document for export...");

    try {
      // Find carousel containers and expand them
      const carouselContainers = document.querySelectorAll('[data-embla-container]');
      const originalStyles: Array<{ element: HTMLElement; style: string }> = [];

      carouselContainers.forEach((container) => {
        if (container instanceof HTMLElement) {
          originalStyles.push({ element: container, style: container.style.cssText });
          container.style.transform = 'none';
          container.style.flexWrap = 'wrap';
          container.style.gap = '1rem';
        }
      });

      // Hide elements that shouldn't be in PDF
      const elementsToHide = document.querySelectorAll('iframe, video, [data-carousel-prev], [data-carousel-next], nav');
      elementsToHide.forEach((el) => {
        if (el instanceof HTMLElement) {
          originalStyles.push({ element: el, style: el.style.cssText });
          el.style.display = 'none';
        }
      });

      await new Promise(resolve => setTimeout(resolve, 300));

      const element = document.querySelector('main');
      if (!element) throw new Error("Could not find main content");

      const canvas = await html2canvas(element as HTMLElement, {
        scale: 1.5,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#0a0a0a',
        logging: false,
      });

      // Restore original styles
      originalStyles.forEach(({ element, style }) => {
        element.style.cssText = style;
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const scaledHeight = (imgHeight * pdfWidth) / imgWidth;

      let heightLeft = scaledHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, scaledHeight);
      heightLeft -= pdfHeight;

      while (heightLeft > 0) {
        position = heightLeft - scaledHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, scaledHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save('CTMRL-Retrospective.pdf');
      toast.success("Document exported successfully!");
    } catch (error) {
      console.error("PDF Export Error:", error);
      toast.error("Failed to export document. Please try again.");
    } finally {
      setIsExporting(false);
    }
  }, []);

  return { exportToPdf, isExporting };
};
