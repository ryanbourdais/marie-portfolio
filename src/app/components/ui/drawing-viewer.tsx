'use client'
import { motion, useMotionValue } from 'framer-motion'
import { ZoomIn, ZoomOut, Download } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface DrawingViewerProps {
  imageUrl: string
  title: string
  onDownload?: () => void
}

export function DrawingViewer({ imageUrl, title, onDownload }: DrawingViewerProps) {
  const [scale, setScale] = useState(1)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.5, 5))
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.5, 1))

  const handleDragStart = () => setIsDragging(true)
  const handleDragEnd = () => setIsDragging(false)

  // Reset position when zooming out completely
  useEffect(() => {
    if (scale === 1) {
      x.set(0)
      y.set(0)
    }
  }, [scale, x, y])

  const calculateDragConstraints = () => {
    if (!containerRef.current) return { top: 0, left: 0, right: 0, bottom: 0 }
    
    const containerBounds = containerRef.current.getBoundingClientRect()
    const dragLimit = (scale - 1) * containerBounds.width / 2

    return {
      left: -dragLimit,
      right: dragLimit,
      top: -dragLimit,
      bottom: dragLimit
    }
  }

  return (
    <div className="relative bg-gray-100 rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="absolute top-4 right-4 flex gap-2 z-10">
        <button
          onClick={handleZoomOut}
          disabled={scale === 1}
          className="p-2 bg-white/90 rounded-full text-gray-600 hover:bg-accent hover:text-white transition-colors disabled:opacity-50"
          title="Zoom out"
        >
          <ZoomOut className="w-5 h-5" />
        </button>
        <button
          onClick={handleZoomIn}
          disabled={scale === 5}
          className="p-2 bg-white/90 rounded-full text-gray-600 hover:bg-accent hover:text-white transition-colors disabled:opacity-50"
          title="Zoom in"
        >
          <ZoomIn className="w-5 h-5" />
        </button>
        {onDownload && (
          <button
            onClick={onDownload}
            className="p-2 bg-white/90 rounded-full text-gray-600 hover:bg-accent hover:text-white transition-colors"
            title="Download drawing"
          >
            <Download className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Drawing Container */}
      <div ref={containerRef} className="relative h-[600px] overflow-hidden">
        <motion.div
          style={{
            x,
            y,
            scale,
          }}
          drag={scale > 1}
          dragConstraints={calculateDragConstraints()}
          dragElastic={0}
          dragMomentum={false}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          className={`relative w-full h-full origin-center ${scale > 1 ? 'cursor-grab active:cursor-grabbing' : ''}`}
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain"
            priority
            draggable={false}
          />
        </motion.div>
      </div>

      {/* Instructions */}
      {scale > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          Drag to pan
        </div>
      )}
    </div>
  )
} 