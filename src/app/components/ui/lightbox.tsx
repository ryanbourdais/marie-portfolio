'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import { KeyboardEvent as ReactKeyboardEvent } from 'react'

interface LightboxProps {
  images: {
    url: string
    alt: string
    caption?: string
  }[]
  initialIndex?: number
  onClose: () => void
  isOpen: boolean
}

export function Lightbox({ images, initialIndex = 0, onClose, isOpen }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [scale, setScale] = useState(1)
  const currentImage = images[currentIndex]

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    setScale(1)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    setScale(1)
  }

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.5, 3))
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.5, 1))

  const handleKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case 'ArrowLeft':
        handlePrevious()
        break
      case 'ArrowRight':
        handleNext()
        break
      case 'Escape':
        onClose()
        break
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
          onClick={onClose}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white z-50"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              handlePrevious()
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              handleNext()
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Zoom controls */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleZoomOut()
              }}
              className="p-2 bg-black/50 rounded-full text-white/80 hover:text-white"
              disabled={scale === 1}
            >
              <ZoomOut className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleZoomIn()
              }}
              className="p-2 bg-black/50 rounded-full text-white/80 hover:text-white"
              disabled={scale === 3}
            >
              <ZoomIn className="w-5 h-5" />
            </button>
          </div>

          {/* Image container */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full h-full"
              style={{ cursor: scale > 1 ? 'grab' : 'default' }}
              drag={scale > 1}
              dragConstraints={{
                top: -(scale - 1) * 300,
                left: -(scale - 1) * 400,
                right: (scale - 1) * 400,
                bottom: (scale - 1) * 300,
              }}
            >
              <Image
                src={currentImage.url}
                alt={currentImage.alt}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Caption */}
          {currentImage.caption && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/90 text-center max-w-2xl px-4"
            >
              <p className="text-sm">{currentImage.caption}</p>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
} 