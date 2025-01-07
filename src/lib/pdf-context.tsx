'use client'
import React, { createContext, useContext, useState } from 'react'

interface PDFContextType {
  isGenerating: boolean
  error: string | null
  startGenerating: () => void
  finishGenerating: () => void
  setError: (error: string | null) => void
}

const PDFContext = createContext<PDFContextType | undefined>(undefined)

export function PDFProvider({ children }: { children: React.ReactNode }) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const startGenerating = () => {
    setIsGenerating(true)
    setError(null)
  }

  const finishGenerating = () => {
    setIsGenerating(false)
  }

  return (
    <PDFContext.Provider value={{
      isGenerating,
      error,
      startGenerating,
      finishGenerating,
      setError
    }}>
      {children}
    </PDFContext.Provider>
  )
}

export function usePDF() {
  const context = useContext(PDFContext)
  if (context === undefined) {
    throw new Error('usePDF must be used within a PDFProvider')
  }
  return context
} 