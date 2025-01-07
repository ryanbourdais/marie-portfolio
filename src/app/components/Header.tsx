'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { MobileNav } from './MobileNav'
import { Download, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { usePDF } from '@/lib/pdf-context'
import { generatePortfolioPDF } from '@/lib/pdf-generator'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
]

export default function Header() {
  const pathname = usePathname()
  const { isGenerating, error, startGenerating, finishGenerating, setError } = usePDF()

  const handleDownload = async () => {
    try {
      await generatePortfolioPDF(
        startGenerating,
        finishGenerating,
        setError
      )
    } catch (error) {
      console.error('Error downloading portfolio:', error)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            Marie French
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  pathname === item.href
                    ? "text-accent"
                    : "text-gray-600"
                )}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Download Portfolio Button */}
            <Button 
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
              onClick={handleDownload}
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Portfolio PDF</span>
                </>
              )}
            </Button>

            <Link
              href="/contact"
              className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent/90"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </div>
      
      {/* Error Toast */}
      {error && (
        <div className="fixed bottom-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p className="text-sm">
            {error}
          </p>
        </div>
      )}
    </header>
  )
} 