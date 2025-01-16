import { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import { generatePDF } from './generatePDF';

const DownloadButton = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    try {
      setIsGenerating(true);
      await generatePDF();
    } catch (error) {
      console.error('Failed to generate PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className={`flex items-center gap-2 text-sm font-medium transition-colors ${
        isGenerating ? 'opacity-50 cursor-not-allowed' : 'hover:text-accent'
      }`}
      aria-label="Download Portfolio"
      // style={{display: 'none'}}
    >
      <FiDownload className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
      <span className="hidden lg:inline">
        {isGenerating ? 'Generating...' : 'Download Portfolio'}
      </span>
    </button>
  );
};

export default DownloadButton; 