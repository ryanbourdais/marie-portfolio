'use client';

import React from 'react'
import { Project } from '@/data/projects'
import Image from 'next/image'

interface ProjectGalleryProps {
  project: Project
}

export function ProjectGallery({ project }: ProjectGalleryProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {project.imageGroups.map((group, groupIndex) => (
          <div 
            key={groupIndex}
            className={`grid gap-6 mb-12 last:mb-0 ${
              group.layout === 'row' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}
          >
            {group.images.map((image, imageIndex) => (
              <figure key={imageIndex} className="relative">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                {image.caption && (
                  <figcaption className="mt-2 text-sm text-gray-600">
                    {image.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
} 