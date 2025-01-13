import { getProject, getAllProjects } from '@/data/projects'
import { notFound } from 'next/navigation'
import { ProjectContent } from './ProjectContent'
import ProjectPDFViewer from '@/app/components/ProjectPDFViewer'
import { ProjectNav } from './ProjectNav'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    slug: project.id,
  }))
}

export default function ProjectPage({ params }: PageProps) {
  const project = getProject(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <ProjectContent project={project} />
      <ProjectPDFViewer project={project} />
      <ProjectNav currentProject={project} />
    </main>
  )
} 