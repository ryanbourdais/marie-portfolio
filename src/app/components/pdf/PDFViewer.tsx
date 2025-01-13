'use client';

import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Download, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Import worker directly from the package
import { GlobalWorkerOptions } from 'pdfjs-dist/legacy/build/pdf';
if (typeof window !== 'undefined') {
  GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
}

interface PDFViewerProps {
  url: string;
  width?: number | string;
  height?: number | string;
  initialScale?: number;
  className?: string;
}

export default function PDFViewer({ 
  url, 
  width = '100%', 
  height = '90vh',
  initialScale = 0.35,
  className = ''
}: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(initialScale);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setIsLoading(false);
  }

  function onDocumentLoadError(error: Error) {
    console.error('Error loading PDF:', error);
    setError(error);
    setIsLoading(false);
  }

  const nextPage = () => {
    if (pageNumber < (numPages || 1)) {
      setPageNumber(pageNumber + 1);
    }
  };

  const previousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const zoomIn = () => {
    setScale(prevScale => Math.min(prevScale + 0.1, 1.2));
  };

  const zoomOut = () => {
    setScale(prevScale => Math.max(prevScale - 0.1, 0.2));
  };

  const downloadPDF = () => {
    window.open(url, '_blank');
  };

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center p-4 text-red-500">
        <p>Error loading PDF: {error.message}</p>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center space-y-4 ${className}`}>
      {/* Controls */}
      <div className="flex items-center justify-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          onClick={previousPage}
          disabled={pageNumber <= 1}
          aria-label="Previous page"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <span className="mx-2">
          Page {pageNumber} of {numPages || '-'}
        </span>
        
        <Button
          variant="outline"
          size="icon"
          onClick={nextPage}
          disabled={pageNumber >= (numPages || 1)}
          aria-label="Next page"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        <div className="mx-2 h-6 w-px bg-gray-200" />

        <Button
          variant="outline"
          size="icon"
          onClick={zoomOut}
          disabled={scale <= 0.2}
          aria-label="Zoom out"
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        
        <span className="mx-2">{Math.round(scale * 100)}%</span>
        
        <Button
          variant="outline"
          size="icon"
          onClick={zoomIn}
          disabled={scale >= 1.2}
          aria-label="Zoom in"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>

        <div className="mx-2 h-6 w-px bg-gray-200" />

        <Button
          variant="outline"
          size="icon"
          onClick={downloadPDF}
          aria-label="Download PDF"
        >
          <Download className="h-4 w-4" />
        </Button>
      </div>

      {/* PDF Document */}
      <div 
        style={{ width, height }} 
        className="relative border rounded-lg overflow-auto bg-white p-6"
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80">
            <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
          </div>
        )}
        <Document
          file={url}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={null}
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            loading={null}
            className="flex justify-center"
          />
        </Document>
      </div>
    </div>
  );
} 