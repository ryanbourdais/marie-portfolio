import React from 'react'
import { Document } from '@react-pdf/renderer'
import { CoverPage } from './Cover'
import { TableOfContents } from './TableOfContents'
import { ProjectPage } from './ProjectPage'
import { SkillsPage } from './SkillsPage'
import { ContactPage } from './ContactPage'
import { getAllProjects } from '@/data/projects'

export function Portfolio() {
  const projects = getAllProjects()
  const totalPages = 4 + projects.length // Cover + TOC + Skills + Projects + Contact

  return (
    <Document>
      <CoverPage pageNumber={1} totalPages={totalPages} />
      <TableOfContents pageNumber={2} totalPages={totalPages} />
      <SkillsPage pageNumber={3} totalPages={totalPages} />
      {projects.map((project, index) => (
        <ProjectPage 
          key={project.id} 
          project={project} 
          pageNumber={index + 4} 
          totalPages={totalPages}
        />
      ))}
      <ContactPage pageNumber={totalPages} totalPages={totalPages} />
    </Document>
  )
} 