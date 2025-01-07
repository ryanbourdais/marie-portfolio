import React from 'react'
import { pdf, Document } from '@react-pdf/renderer'
import { Cover } from '@/components/pdf/Cover'
import { getAllProjects } from '@/data/projects'
import { siteConfig } from '@/data/content'

export async function generatePortfolioPDF(
  onStart?: () => void,
  onFinish?: () => void,
  onError?: (error: string) => void
) {
  try {
    onStart?.()
    console.log('Generating PDF...')
    
    // Create the PDF document
    const blob = await pdf(
      React.createElement(Document, {},
        React.createElement(Cover, {
          pageNumber: 1,
          totalPages: 1
        })
      )
    ).toBlob()

    // Create a download link
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'portfolio.pdf'
    
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