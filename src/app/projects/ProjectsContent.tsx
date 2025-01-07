'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { Filter, ArrowUpDown } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Project } from '@/data/projects'

interface ProjectsContentProps {
  initialProjects: Project[]
}

export default function ProjectsContent({ initialProjects }: ProjectsContentProps) {
  const [selectedCategory, setSelectedCategory] = useState("All Projects")
  const [sortBy, setSortBy] = useState<SortOption>('newest')
  
  // Rest of your existing ProjectsPage component code here...
  // Move all the component logic here
} 