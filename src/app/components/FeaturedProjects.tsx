import Image from 'next/image'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  category: string
  imageUrl: string
  description: string
}

const ProjectCard = ({ title, category, imageUrl, description }: ProjectCardProps) => (
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
)

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Modern Family Home",
      category: "Residential",
      imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      description: "A custom home design featuring sustainable elements and innovative space utilization for a growing family."
    },
    {
      title: "Boutique Office Space",
      category: "Commercial",
      imageUrl: "https://images.unsplash.com/photo-1577493340887-b7bfff550145",
      description: "A modern workplace design emphasizing natural light and collaborative spaces."
    },
    {
      title: "Historic Home Renovation",
      category: "Residential",
      imageUrl: "https://images.unsplash.com/photo-1631193816258-28b44b21e78b",
      description: "Careful renovation planning that preserves historical character while adding modern amenities."
    }
  ]

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
          <Button variant="outline" className="hidden md:flex items-center gap-2">
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" className="flex items-center gap-2 mx-auto">
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
} 