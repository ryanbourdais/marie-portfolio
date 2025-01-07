'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 -mr-2 text-gray-600 hover:text-accent"
        aria-label="Toggle menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex flex-col bg-white/95 backdrop-blur-sm"
            >
              {/* Header */}
              <div className="flex justify-between items-center px-4 h-20 border-b bg-white">
                <Link 
                  href="/" 
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold"
                >
                  Marie French
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 -mr-2 text-gray-600 hover:text-accent"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 flex flex-col justify-center px-4 bg-white">
                <nav>
                  <ul className="space-y-6">
                    {navItems.map((item) => (
                      <li key={item.href} className="text-center">
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "block py-3 text-3xl font-medium transition-colors hover:text-accent",
                            pathname === item.href
                              ? "text-accent"
                              : "text-gray-800"
                          )}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Footer CTA */}
              <div className="p-4 border-t bg-white">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-4 text-center bg-accent text-white rounded-md hover:bg-accent/90 text-lg font-medium"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
} 