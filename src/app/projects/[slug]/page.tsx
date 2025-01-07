import { getProject, getAllProjects } from '@/data/projects'
import { notFound } from 'next/navigation'
import { ProjectContent } from './ProjectContent'

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

  return <ProjectContent project={project} />
} 