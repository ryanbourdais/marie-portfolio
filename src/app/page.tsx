import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-image.jpg"
            alt="Architectural Design"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container mx-auto relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Architectural Design & Drafting
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Bringing architectural visions to life through precise drafting, 
            innovative design, and technical expertise.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white hover:text-white">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards will go here */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {['Photoshop', 'Revit', 'SketchUp', 'Building Codes', 'Documentation'].map((skill) => (
              <div key={skill} className="p-6 text-center bg-white shadow-lg rounded-lg">
                <h3 className="font-semibold">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 