import { Button } from '../components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { Filter, ArrowRight } from 'lucide-react'
import { getAllProjects } from '@/data/projects'

interface ProjectCardProps {
  id: string
  title: string
  category: string
  description: string
  images: {
    url: string
    alt: string
  }[]
}

const ProjectCard = ({ title, category, description, id, images }: ProjectCardProps) => (
  <div className="group cursor-pointer">
    <Link href={`/projects/${id}`}>
      <div className="relative h-[300px] overflow-hidden rounded-lg mb-4">
        <Image
          src={images[0].url}
          alt={images[0].alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-sm text-white/80 mb-1">{category}</p>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
      <p className="text-gray-600 line-clamp-2">{description}</p>
    </Link>
  </div>
)

export default function ProjectsPage() {
  const categories = [
    "All Projects",
    "Residential",
    "Commercial",
    "Technical Documentation"
  ]

  const projects = getAllProjects()

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-accent text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My Projects
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Explore my portfolio of architectural drafting work, featuring residential designs, 
            commercial projects, and technical documentation.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-4">
            <Filter className="w-5 h-5 text-gray-400" />
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 