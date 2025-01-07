'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import Image from 'next/image'

interface LightboxProps {
  images: {
    url: string
    alt: string
    caption: string
  }[]
  initialIndex: number
  isOpen: boolean
  onClose: () => void
}

export function Lightbox({ images, initialIndex, isOpen, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  // Reset current index when initial index changes
  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      
      switch (e.key) {
        case 'ArrowLeft':
          setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
          break
        case 'ArrowRight':
          setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
          break
        case 'Escape':
          onClose()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, images.length, onClose])

  if (!isOpen) return null

  const currentImage = images[currentIndex]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 p-2 text-white/75 hover:text-white"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Navigation buttons */}
        <button
          className="absolute left-4 p-2 text-white/75 hover:text-white"
          onClick={(e) => {
            e.stopPropagation()
            setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
          }}
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <button
          className="absolute right-4 p-2 text-white/75 hover:text-white"
          onClick={(e) => {
            e.stopPropagation()
            setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
          }}
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Image container */}
        <div 
          className="relative w-full h-full max-w-7xl max-h-[90vh] mx-auto p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full h-full">
            <Image
              src={currentImage.url}
              alt={currentImage.alt}
              fill
              className="object-contain"
              priority
            />
          </div>
          {currentImage.caption && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
              {currentImage.caption}
            </div>
          )}
        </div>

        {/* Image counter */}
        <div className="absolute bottom-4 right-4 text-white/75">
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  )
} 