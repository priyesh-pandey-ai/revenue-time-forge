import { useState, useCallback } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { toast } from "sonner";

export const usePdfExport = () => {
  const [isExporting, setIsExporting] = useState(false);

  const exportToPdf = useCallback(async () => {
    setIsExporting(true);
    toast.info("Preparing document for export... This may take a moment.");

    try {
      const element = document.querySelector('main');
      if (!element) throw new Error("Could not find main content");

      const canvas = await html2canvas(element as HTMLElement, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#09090b',
        logging: false,
        onclone: (clonedDoc) => {
          const clonedMain = clonedDoc.querySelector('main');
          if (!clonedMain) return;

          // Force all text to be visible with solid colors
          const allElements = clonedMain.querySelectorAll('*');
          allElements.forEach((el) => {
            if (el instanceof HTMLElement) {
              const computed = window.getComputedStyle(el);
              
              // Remove problematic CSS that html2canvas can't handle
              el.style.backdropFilter = 'none';
              (el.style as unknown as Record<string, string>).webkitBackdropFilter = 'none';
              el.style.animation = 'none';
              el.style.transition = 'none';
              
              // Fix gradient text by making it solid
              if (computed.backgroundClip === 'text' || el.style.webkitBackgroundClip === 'text') {
                el.style.background = 'none';
                el.style.backgroundClip = 'unset';
                el.style.webkitBackgroundClip = 'unset';
                el.style.color = '#a855f7'; // primary color
              }

              // Ensure text is visible
              if (el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'H3' || el.tagName === 'H4' || el.tagName === 'P' || el.tagName === 'SPAN' || el.tagName === 'LI') {
                if (computed.color === 'rgba(0, 0, 0, 0)' || computed.color === 'transparent') {
                  el.style.color = '#fafafa';
                }
              }
            }
          });

          // Hide videos/iframes and replace with placeholder
          const iframes = clonedMain.querySelectorAll('iframe');
          iframes.forEach((iframe) => {
            const placeholder = clonedDoc.createElement('div');
            placeholder.style.cssText = `
              width: 100%;
              height: 100%;
              background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
              display: flex;
              align-items: center;
              justify-content: center;
              color: #fafafa;
              font-size: 18px;
              font-weight: bold;
              border-radius: 12px;
            `;
            placeholder.textContent = '📹 Video Content - Watch Online';
            iframe.parentNode?.replaceChild(placeholder, iframe);
          });

          // Expand carousels to show all items
          const carouselContainers = clonedMain.querySelectorAll('[class*="flex"][class*="gap"]');
          carouselContainers.forEach((container) => {
            if (container instanceof HTMLElement && container.style.transform) {
              container.style.transform = 'none';
            }
          });

          // Hide carousel navigation buttons
          const navButtons = clonedMain.querySelectorAll('button[class*="CarouselPrevious"], button[class*="CarouselNext"]');
          navButtons.forEach((btn) => {
            if (btn instanceof HTMLElement) {
              btn.style.display = 'none';
            }
          });
        }
      });

      const imgData = canvas.toDataURL('image/png', 1.0);
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
