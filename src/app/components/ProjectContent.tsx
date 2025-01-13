'use client';

import React from 'react';
import { Project } from '@/data/projects';

interface ProjectContentProps {
  project: Project;
}

export default function ProjectContent({ project }: ProjectContentProps) {
  return (
    <div className="max-w-3xl mx-auto">
      {project.description && (
        <div className="prose dark:prose-invert mb-12">
          <p className="text-lg">{project.description}</p>
        </div>
      )}

      {project.sections?.map((section, index) => (
        <div key={index} className="mb-12">
          {section.title && (
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
          )}
          {section.content && (
            <div className="prose dark:prose-invert">
              <p>{section.content}</p>
            </div>
          )}
        </div>
      ))}

      {project.services && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Services Provided</h2>
          <ul className="list-disc list-inside space-y-2">
            {project.services.map((service, index) => (
              <li key={index} className="text-muted-foreground">
                {service}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
} 