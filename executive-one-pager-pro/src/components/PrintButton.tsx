
import { usePrintResume } from '@/hooks/usePrintResume';
import { Printer } from 'lucide-react';

const PrintButton: React.FC = () => {
  const printResume = usePrintResume();
  
  return (
    <button 
      onClick={printResume}
      className="btn-secondary no-print flex items-center gap-2"
      aria-label="Download PDF résumé"
    >
      <Printer className="h-4 w-4" />
      <span>Download PDF</span>
    </button>
  );
};

export default PrintButton;
