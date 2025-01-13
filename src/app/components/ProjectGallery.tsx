'use client';

import React from 'react';
import Image from 'next/image';
import { Project } from '@/data/projects';

interface ProjectGalleryProps {
  project: Project;
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  if (!project.imageGroups?.length) return null;

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-8">Project Gallery</h2>
      <div className="space-y-16">
        {project.imageGroups.map((group, groupIndex) => {
          const isRow = group.layout === 'row';
          const isTwoItems = group.images.length === 2;
          const isOneItem = group.images.length === 1;

          return (
            <div key={groupIndex}>
              <div 
                className={`
                  ${!isRow ? 'space-y-6' : `grid ${isTwoItems ? 'grid-cols-2' : 'grid-cols-3'} gap-6`}
                  ${isRow && isOneItem ? 'max-w-4xl mx-auto' : ''}
                `}
              >
                {group.images.map((image, imageIndex) => (
                  <div 
                    key={imageIndex} 
                    className={`
                      relative 
                      ${!isRow ? 'aspect-[16/9]' : 'aspect-[4/3]'}
                      ${isRow && isOneItem ? 'col-span-3' : ''}
                    `}
                  >
                    <Image
                      src={image.url}
                      alt={image.caption || `Project image ${imageIndex + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                    {image.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 rounded-b-lg">
                        <p className="text-sm">{image.caption}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 