import { pdf } from '@react-pdf/renderer'
import { CoverPage } from '@/components/pdf'
import { getAllProjects } from '@/data/projects'
import { siteConfig } from '@/data/content'

export async function generatePortfolioPDF() {
  try {
    console.log('Generating PDF...')
    
    // Create the PDF document
    const blob = await pdf(
      <Document>
        <CoverPage />
      </Document>
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

  } catch (error) {
    console.error('Error generating PDF:', error)
    throw error
  }
} 