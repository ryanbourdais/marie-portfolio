import { pdf } from '@react-pdf/renderer';
import React from 'react';
import PortfolioPDF from './PortfolioPDF';

export const generatePDF = async () => {
  try {
    const blob = await pdf(React.createElement(PortfolioPDF)).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'marie-french-portfolio.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
}; 