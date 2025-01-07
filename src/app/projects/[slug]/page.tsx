import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { getProject } from '@/data/projects'

interface PageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: PageProps) {
  const project = getProject(params.slug)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="pt-20">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/projects" className="hover:text-accent">
            Projects
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">{project.title}</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative h-[60vh] bg-gray-100">
        <Image
          src={project.images[0].url}
          alt={project.images[0].alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <div className="flex gap-4 text-white/90">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.location}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-gray-600">{project.description}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-gray-600">{project.challenge}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Solution</h2>
              <p className="text-gray-600">{project.solution}</p>
            </section>

            {/* Image Gallery */}
            <section className="space-y-4">
              {project.images.slice(1).map((image, index) => (
                <figure key={index} className="space-y-2">
                  <div className="relative h-[400px] bg-gray-100">
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="text-sm text-gray-500">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <section>
              <h3 className="text-lg font-bold mb-4">Services Provided</h3>
              <ul className="space-y-2">
                {project.services.map((service, index) => (
                  <li key={index} className="text-gray-600">
                    • {service}
                  </li>
                ))}
              </ul>
            </section>

            <Button asChild className="w-full">
              <Link href="/contact">
                Discuss Your Project
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 