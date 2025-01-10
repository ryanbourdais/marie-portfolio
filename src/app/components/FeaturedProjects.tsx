import Image from 'next/image'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { getAllProjects } from '@/data/projects'

interface ProjectCardProps {
  title: string
  category: string
  imageUrl: string
  description: string
  slug: string
}

const ProjectCard = ({ title, category, imageUrl, description, slug }: ProjectCardProps) => (
  <Link href={`/projects/${slug}`} className="block">
    <div className="group relative overflow-hidden rounded-lg">
      <div className="relative h-[400px] w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <p className="text-sm font-medium mb-2 opacity-90">{category}</p>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
      </div>
    </div>
  </Link>
)

export default function FeaturedProjects() {
  // Get all projects and sort by year (most recent first)
  const allProjects = getAllProjects()
  const recentProjects = allProjects
    .sort((a, b) => parseInt(b.year) - parseInt(a.year))
    .slice(0, 3)
    .map(project => ({
      title: project.title,
      category: project.category,
      imageUrl: project.imageGroups[0]?.images[0]?.url || '/images/placeholder.jpg',
      description: project.description,
      slug: project.id
    }))

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recent Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              A selection of my latest architectural drafting and design work
            </p>
          </div>
          <Link href="/projects">
            <Button variant="outline" className="hidden md:flex items-center gap-2">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentProjects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/projects">
            <Button variant="outline" className="flex items-center gap-2 mx-auto">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 