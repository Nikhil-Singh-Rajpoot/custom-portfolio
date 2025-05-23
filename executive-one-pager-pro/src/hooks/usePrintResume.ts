
import { useCallback } from 'react';

export function usePrintResume() {
  const printResume = useCallback(() => {
    // Add a slight delay to ensure all styles are applied
    setTimeout(() => {
      window.print();
    }, 300);
  }, []);

  return printResume;
}
