'use client';

import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import ProjectHero from '@/components/ProjectHero';
import ProjectContent from '@/components/ProjectContent';
import ProjectGallery from '@/components/ProjectGallery';
import PDFViewer from '@/components/pdf/PDFViewer';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects[params.slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <ProjectHero project={project} />
      
      <div className="container mx-auto px-4 py-12">
        <ProjectContent project={project} />
        
        {project.pdfUrl && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Project Documentation</h2>
            <PDFViewer 
              url={project.pdfUrl} 
              height="800px"
              className="w-full max-w-6xl mx-auto"
            />
          </div>
        )}

        <ProjectGallery project={project} />
      </div>
    </div>
  );
} 