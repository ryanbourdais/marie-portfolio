'use client';

import React from 'react';
import { Project } from '@/data/projects';

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <div className="relative h-[50vh] min-h-[400px] w-full bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
      <div className="container mx-auto px-4 h-full flex items-end pb-12">
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-4 text-lg text-muted-foreground">
            <span>{project.category}</span>
            {project.location && (
              <>
                <span>•</span>
                <span>{project.location}</span>
              </>
            )}
            {project.year && (
              <>
                <span>•</span>
                <span>{project.year}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 