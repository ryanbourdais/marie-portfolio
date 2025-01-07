import { pdf } from '@react-pdf/renderer'
import { Portfolio } from '@/components/pdf'
import React from 'react'

export async function generatePortfolioPDF(
  onStart?: () => void,
  onFinish?: () => void,
  onError?: (error: string) => void
) {
  try {
    onStart?.()
    console.log('Generating PDF...')
    
    // Create the PDF document
    const blob = await pdf((
      <Portfolio />
    )).toBlob()

    // Create a download link
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `portfolio-${new Date().toISOString().split('T')[0]}.pdf`
    
    // Trigger download
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Cleanup
    URL.revokeObjectURL(url)
    onFinish?.()

  } catch (error) {
    console.error('Error generating PDF:', error)
    onError?.(error instanceof Error ? error.message : 'Failed to generate PDF')
    throw error
  }
} 