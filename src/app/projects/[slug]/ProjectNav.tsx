'use client';

import React from 'react';
import type { FC } from 'react';
import { Project, getAllProjects } from '@/data/projects';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectNavProps {
  currentProject: Project;
}

export const ProjectNav: FC<ProjectNavProps> = ({ currentProject }) => {
  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex(p => p.id === currentProject.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  return (
    <div role="navigation" className="py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {prevProject ? (
            <Button variant="ghost" asChild>
              <Link href={`/projects/${prevProject.id}`} className="flex items-center gap-2">
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden md:inline">{prevProject.title}</span>
                <span className="md:hidden">Previous</span>
              </Link>
            </Button>
          ) : (
            <div /> /* Empty div for spacing */
          )}

          <Button variant="outline" asChild>
            <Link href="/projects">
              All Projects
            </Link>
          </Button>

          {nextProject ? (
            <Button variant="ghost" asChild>
              <Link href={`/projects/${nextProject.id}`} className="flex items-center gap-2">
                <span className="hidden md:inline">{nextProject.title}</span>
                <span className="md:hidden">Next</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          ) : (
            <div /> /* Empty div for spacing */
          )}
        </div>
      </div>
    </div>
  );
}; 