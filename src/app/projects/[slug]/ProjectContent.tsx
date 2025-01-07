'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Lightbox } from '@/app/components/ui/lightbox'
import { DrawingViewer } from '@/app/components/ui/drawing-viewer'
import { Project } from '@/data/projects'

interface ProjectContentProps {
  project: Project
}

export function ProjectContent({ project }: ProjectContentProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [initialImageIndex, setInitialImageIndex] = useState(0)

  const openLightbox = (index: number) => {
    setInitialImageIndex(index)
    setLightboxOpen(true)
  }

  return (
    <div className="pt-20">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/projects" className="hover:text-accent">
            Projects
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">{project.title}</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative h-[60vh] bg-gray-100">
        <Image
          src={project.images[0].url}
          alt={project.images[0].alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <div className="flex gap-4 text-white/90">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.location}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of your content... */}
      {/* Copy all the content sections from the original page component */}

      <Lightbox
        images={project.images}
        initialIndex={initialImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  )
} 