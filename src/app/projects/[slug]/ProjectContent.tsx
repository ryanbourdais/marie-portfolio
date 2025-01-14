'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Lightbox } from '@/app/components/ui/lightbox'
import { DrawingViewer } from '@/app/components/ui/drawing-viewer'
import { Project } from '@/data/projects'
import { cn } from '@/lib/utils'

interface ProjectContentProps {
  project: Project
}

export function ProjectContent({ project }: ProjectContentProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [initialImageIndex, setInitialImageIndex] = useState(0)

  // Pre-calculate flattened images array for consistent indexing
  const allImages = project.imageGroups.flatMap(group => group.images)

  const openLightbox = (groupIndex: number, imageIndex: number) => {
    // Simpler index calculation
    let absoluteIndex = 0
    for (let i = 0; i < groupIndex; i++) {
      absoluteIndex += project.imageGroups[i].images.length
    }
    absoluteIndex += imageIndex
    
    setInitialImageIndex(absoluteIndex)
    setLightboxOpen(true)
  }

  // Get the first image from the first image group for the hero
  const heroImage = project.imageGroups[0]?.images[0]

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
          src={heroImage?.url || ''}  // Add fallback empty string
          alt={heroImage?.alt || project.title}  // Fallback to project title
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

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-gray-600">{project.description}</p>
          </section>

          {project.sections?.map((section, index) => (
            <section key={index}>
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <p className="text-gray-600">{section.content}</p>
            </section>
          ))}

          {/* Image Gallery */}
          <section className="space-y-8">
            {project.imageGroups.map((group, groupIndex) => (
              <div 
                key={groupIndex} 
                className={cn(
                  "space-y-4",
                  group.layout === 'row' && `space-y-0 grid ${group.images.length === 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-4`
                )}
              >
                {group.images.map((image, imageIndex) => (
                  <figure 
                    key={imageIndex} 
                    className={cn(
                      "cursor-zoom-in",
                      group.layout === 'stack' ? "space-y-2" : "space-y-1"
                    )}
                    onClick={() => openLightbox(groupIndex, imageIndex)}
                  >
                    <div className={cn(
                      "relative",
                      group.layout === 'stack' ? "h-[400px]" : "aspect-[2/3]"
                    )}>
                      <Image
                        src={image.url}
                        alt={image.alt}
                        fill
                        className={cn(
                          "hover:opacity-90 transition-opacity",
                          groupIndex === 0 ? "object-cover" : "object-contain"
                        )}
                      />
                    </div>
                    <figcaption className="text-sm text-gray-500">
                      {image.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            ))}
          </section>

          {project.technicalDrawings && (
            <section>
              <h2 className="text-2xl font-bold mb-4">Technical Drawings</h2>
              <div className="space-y-8">
                {project.technicalDrawings.map((drawing, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-xl font-semibold">{drawing.title}</h3>
                    <DrawingViewer
                      imageUrl={drawing.url}
                      title={drawing.title}
                      onDownload={() => window.open(drawing.url, '_blank')}
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      <Lightbox
        images={allImages}
        initialIndex={initialImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  )
} 