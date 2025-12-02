import { useCallback } from "react";
import { toast } from "sonner";

export const usePdfExport = () => {
  const exportToPdf = useCallback(() => {
    toast.info("Opening print dialog... Use 'Save as PDF' option.");
    
    // Add print class to body to trigger print styles
    document.body.classList.add('printing');
    
    // Small delay to ensure styles are applied
    setTimeout(() => {
      window.print();
      
      // Remove print class after print dialog closes
      setTimeout(() => {
        document.body.classList.remove('printing');
      }, 1000);
    }, 100);
  }, []);

  return { exportToPdf, isExporting: false };
};
