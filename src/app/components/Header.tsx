import Link from 'next/link'
import { Button } from './ui/button'
import { AvailabilityIndicator } from './AvailabilityIndicator'

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Marie French
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <AvailabilityIndicator variant="compact" />
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-gray-900">
              Projects
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Button asChild>
              <Link href="/contact">Let's Work Together</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
} 