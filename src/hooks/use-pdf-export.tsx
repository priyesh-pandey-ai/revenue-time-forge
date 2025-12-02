import { useState, useCallback } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { toast } from "sonner";

export const usePdfExport = () => {
  const [isExporting, setIsExporting] = useState(false);

  const exportToPdf = useCallback(async () => {
    setIsExporting(true);
    toast.info("Preparing full document export... Please wait.");

    try {
      const mainElement = document.querySelector('main');
      if (!mainElement) throw new Error("Could not find main content");

      // Store original scroll position
      const originalScroll = window.scrollY;
      
      // Scroll to top first
      window.scrollTo(0, 0);
      await new Promise(resolve => setTimeout(resolve, 100));

      // Get full page dimensions
      const fullHeight = mainElement.scrollHeight;
      const fullWidth = mainElement.scrollWidth;

      // Create a wrapper div to hold all content for capture
      const wrapper = document.createElement('div');
      wrapper.style.cssText = `
        position: absolute;
        left: -9999px;
        top: 0;
        width: ${fullWidth}px;
        background: #09090b;
        overflow: visible;
      `;
      document.body.appendChild(wrapper);

      // Clone the main content
      const clone = mainElement.cloneNode(true) as HTMLElement;
      clone.style.cssText = `
        width: ${fullWidth}px;
        height: auto;
        overflow: visible;
        background: #09090b;
      `;
      wrapper.appendChild(clone);

      // Fix all elements in the clone for proper rendering
      const allElements = clone.querySelectorAll('*');
      allElements.forEach((el) => {
        if (el instanceof HTMLElement) {
          const computed = window.getComputedStyle(el);
          
          // Remove problematic CSS
          el.style.backdropFilter = 'none';
          el.style.animation = 'none';
          el.style.transition = 'none';
          el.style.transform = 'none';
          
          // Fix gradient text
          if (computed.backgroundClip === 'text' || computed.webkitBackgroundClip === 'text') {
            el.style.background = 'none';
            el.style.backgroundClip = 'unset';
            el.style.webkitBackgroundClip = 'unset';
            el.style.color = '#a855f7';
            el.style.webkitTextFillColor = '#a855f7';
          }

          // Ensure opacity is full
          if (el.style.opacity === '0' || computed.opacity === '0') {
            el.style.opacity = '1';
          }
        }
      });

      // Expand all carousels to show all items
      const carouselContents = clone.querySelectorAll('[class*="embla"], [data-embla-container]');
      carouselContents.forEach((container) => {
        if (container instanceof HTMLElement) {
          container.style.transform = 'none';
          container.style.overflow = 'visible';
        }
      });

      // Find carousel item containers and make them wrap
      const carouselItemContainers = clone.querySelectorAll('.flex.gap-4, [class*="CarouselContent"]');
      carouselItemContainers.forEach((container) => {
        if (container instanceof HTMLElement) {
          container.style.display = 'grid';
          container.style.gridTemplateColumns = 'repeat(2, 1fr)';
          container.style.gap = '1.5rem';
          container.style.transform = 'none';
        }
      });

      // Replace iframes with placeholders
      const iframes = clone.querySelectorAll('iframe');
      iframes.forEach((iframe) => {
        const placeholder = document.createElement('div');
        placeholder.style.cssText = `
          width: 100%;
          aspect-ratio: 16/9;
          background: linear-gradient(135deg, #1e1e2e 0%, #2d2d44 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fafafa;
          font-size: 16px;
          font-weight: 600;
          border-radius: 12px;
          border: 1px solid #3f3f46;
        `;
        placeholder.innerHTML = '🎬 Video Content Available Online';
        iframe.parentNode?.replaceChild(placeholder, iframe);
      });

      // Hide nav buttons
      const navButtons = clone.querySelectorAll('[class*="Carousel"][class*="Previous"], [class*="Carousel"][class*="Next"]');
      navButtons.forEach((btn) => {
        if (btn instanceof HTMLElement) {
          btn.style.display = 'none';
        }
      });

      // Wait for styles to apply
      await new Promise(resolve => setTimeout(resolve, 500));

      // Capture the clone
      const canvas = await html2canvas(clone, {
        scale: 1.5,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#09090b',
        logging: false,
        width: fullWidth,
        height: clone.scrollHeight,
        windowWidth: fullWidth,
        windowHeight: clone.scrollHeight,
      });

      // Remove the wrapper
      document.body.removeChild(wrapper);

      // Restore scroll position
      window.scrollTo(0, originalScroll);

      // Create PDF with proper pagination
      const imgData = canvas.toDataURL('image/jpeg', 0.8); // Use JPEG for smaller size
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true,
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const scaledWidth = pdfWidth;
      const scaledHeight = (imgHeight * pdfWidth) / imgWidth;

      let heightLeft = scaledHeight;
      let position = 0;
      let pageNum = 1;

      // Add pages
      while (heightLeft > 0) {
        if (pageNum > 1) {
          pdf.addPage();
        }
        
        const yOffset = pageNum === 1 ? 0 : -pdfHeight * (pageNum - 1);
        pdf.addImage(imgData, 'JPEG', 0, yOffset, scaledWidth, scaledHeight);
        
        heightLeft -= pdfHeight;
        pageNum++;
      }

      pdf.save('CTMRL-Retrospective.pdf');
      toast.success(`Document exported! (${pageNum - 1} pages)`);
    } catch (error) {
      console.error("PDF Export Error:", error);
      toast.error("Export failed. Please try again.");
    } finally {
      setIsExporting(false);
    }
  }, []);

  return { exportToPdf, isExporting };
};
