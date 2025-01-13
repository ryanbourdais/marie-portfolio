'use client';

import React from 'react';
import { Project } from '@/data/projects';
import dynamic from 'next/dynamic';

const PDFViewer = dynamic(() => import('./pdf/PDFViewer'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[800px] bg-gray-100 rounded-lg animate-pulse flex items-center justify-center">
      <p className="text-gray-500">Loading PDF viewer...</p>
    </div>
  ),
});

interface ProjectPDFViewerProps {
  project: Project;
}

export default function ProjectPDFViewer({ project }: ProjectPDFViewerProps) {
  if (!project.pdf) return null;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">{project.pdf.title}</h2>
        <PDFViewer 
          url={project.pdf.url}
          height="800px"
          className="max-w-5xl mx-auto"
        />
      </div>
    </section>
  );
} 