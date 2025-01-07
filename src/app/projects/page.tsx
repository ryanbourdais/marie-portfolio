import dynamic from 'next/dynamic'
import { getAllProjects } from '@/data/projects'

const ProjectsContent = dynamic(() => import('./ProjectsContent'), { ssr: true })

export default function ProjectsPage() {
  const projects = getAllProjects()
  
  return <ProjectsContent initialProjects={projects} />
} 