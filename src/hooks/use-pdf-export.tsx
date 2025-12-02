import { useCallback } from "react";
import { toast } from "sonner";

export const usePdfExport = () => {
  const exportToPdf = useCallback(() => {
    toast.info("Opening print dialog... Select 'Save as PDF' as destination.");
    
    // Add print class to body
    document.body.classList.add('printing');
    
    // Trigger print
    setTimeout(() => {
      window.print();
      
      // Remove class after dialog closes
      window.addEventListener('afterprint', () => {
        document.body.classList.remove('printing');
      }, { once: true });
    }, 100);
  }, []);

  return { exportToPdf, isExporting: false };
};
