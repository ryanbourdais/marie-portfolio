import 'pdfjs-dist/build/pdf.worker.min';

// The worker will be automatically loaded by pdf.js
export const pdfWorkerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${process.env.NEXT_PUBLIC_PDFJS_VERSION}/pdf.worker.min.js`; 