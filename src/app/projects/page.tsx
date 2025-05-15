'use client'
import { Button } from '../components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { Filter, ArrowRight, ArrowUpDown } from 'lucide-react'
import { getAllProjects } from '@/data/projects'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ProjectCardProps {
  id: string
  title: string
  category: string
  description: string
  imageGroups: {
    layout: 'stack' | 'row'
    images: {
      url: string
      alt: string
    }[]
  }[]
}

const ProjectCard = ({ title, category, description, id, imageGroups }: ProjectCardProps) => {
  // Get the first image from the first image group
  const thumbnailImage = imageGroups[0]?.images[0]

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
    >
      <Link href={`/projects/${id}`}>
        <div className="relative h-[250px] overflow-hidden rounded-lg">
          <Image
            src={thumbnailImage?.url || ''}
            alt={thumbnailImage?.alt || title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-sm text-white/80 mb-1">{category}</p>
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

type SortOption = 'newest' | 'oldest'

const sortProjects = (projects: any[], sortBy: SortOption) => {
  return [...projects].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return parseInt(b.year) - parseInt(a.year)
      case 'oldest':
        return parseInt(a.year) - parseInt(b.year)
      default:
        return 0
    }
  })
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects")
  const [sortBy, setSortBy] = useState<SortOption>('newest')
  const headerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const scrollPosition = window.scrollY;
        const parallaxOffset = scrollPosition * 0.3; // Adjust for desired intensity
        headerRef.current.style.transform = `translateY(${parallaxOffset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    "All Projects",
    "Residential",
    "Commercial"
  ]

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
  ]

  const allProjects = getAllProjects()
  const filteredProjects = selectedCategory === "All Projects"
    ? allProjects
    : allProjects.filter(project => {
        if (selectedCategory === "Residential") {
          return project.category.includes("Residential")
        }
        return project.category === selectedCategory
      })
  
  const sortedProjects = sortProjects(filteredProjects, sortBy)

  return (
    <div className="pt-20">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-accent text-white py-20 relative overflow-hidden"
      >
        <div ref={headerRef} className="w-[95%] mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My Projects
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
          Explore my portfolio of architectural drafting work, featuring residential designs, 
          commercial projects, and technical documentation.
          </p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="py-8 border-b"
      >
        <div className="w-[95%] mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* Categories */}
            <div className="flex items-center gap-4 overflow-x-auto pb-4 md:pb-0 flex-grow">
              <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
              {categories.map((category) => (
                <motion.div
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={category === selectedCategory ? "default" : "outline"}
                    className="whitespace-nowrap"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                    {category === selectedCategory && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full"
                      >
                        {sortedProjects.length}
                      </motion.span>
                    )}
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* Sort Options */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 border-t md:border-t-0 pt-4 md:pt-0 md:border-l md:pl-4"
            >
              <ArrowUpDown className="w-5 h-5 text-gray-400" />
              <div className="flex gap-2">
                {sortOptions.map((option) => (
                  <motion.div
                    key={option.value}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant={sortBy === option.value ? "default" : "outline"}
                      size="sm"
                      className="whitespace-nowrap"
                      onClick={() => setSortBy(option.value)}
                    >
                      {option.label}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="py-12"
      >
        <div className="w-[95%] mx-auto">
          <AnimatePresence mode="popLayout">
            {sortedProjects.length > 0 ? (
              <motion.div
                layout
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {sortedProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    category={project.category}
                    description={project.description}
                    imageGroups={project.imageGroups}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="text-center py-12"
              >
                <p className="text-gray-600">
                  No projects found in this category.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => setSelectedCategory("All Projects")}
                  >
                    Show all projects
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>
    </div>
  )
} 