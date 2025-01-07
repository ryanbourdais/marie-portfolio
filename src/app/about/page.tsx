'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '../components/ui/button'
import Link from 'next/link'
import { Download, Mail, Loader2 } from 'lucide-react'
import { ServiceArea } from '../components/ServiceArea'
import { ProfileImage } from '../components/ProfileImage'
import { AvailabilityIndicator } from '../components/AvailabilityIndicator'
import { generatePortfolioPDF } from '@/lib/pdf-generator'
import { usePDF } from '@/lib/pdf-context'

export default function AboutPage() {
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
    <div className="pt-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-accent text-white py-20"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Architectural draftsperson with a passion for creating detailed, precise, 
            and innovative technical drawings.
          </p>
        </div>
      </motion.section>

      {/* Profile Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Profile Image */}
            <div className="space-y-6">
              <ProfileImage />
              
              {/* Download Portfolio Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Button 
                  onClick={handleDownload}
                  disabled={isGenerating}
                  className="w-full flex items-center justify-center gap-2 py-6 text-lg"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Generating PDF...
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      Download Complete Portfolio
                    </>
                  )}
                </Button>
                <p className="text-sm text-gray-500 text-center mt-2">
                  Includes detailed project information and high-resolution images
                </p>
              </motion.div>
              {error && (
                <p className="text-sm text-red-500 text-center mt-2">
                  Error: {error}
                </p>
              )}
            </div>

            {/* Profile Info */}
            <div className="space-y-8">
              {/* Bio and Experience */}
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-4">Professional Background</h2>
                <p className="text-gray-600">
                  With over 8 years of experience in architectural drafting, I specialize in 
                  creating precise technical drawings for residential and commercial projects. 
                  My expertise includes using industry-standard software to produce detailed 
                  construction documents, permit drawings, and 3D visualizations.
                </p>
              </motion.section>

              {/* Skills Grid */}
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold">Technical Skills</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-4">Software Proficiency</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• AutoCAD</li>
                      <li>• Revit</li>
                      <li>• SketchUp</li>
                      <li>• Adobe Creative Suite</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Areas of Expertise</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Construction Documentation</li>
                      <li>• Building Code Compliance</li>
                      <li>• 3D Modeling</li>
                      <li>• Permit Documentation</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Education & Certifications */}
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold mb-4">Education & Certifications</h2>
                <ul className="space-y-4">
                  <li>
                    <h3 className="font-semibold">Architectural Technology Diploma</h3>
                    <p className="text-gray-600">College Name, 2015</p>
                  </li>
                  <li>
                    <h3 className="font-semibold">AutoCAD Professional Certification</h3>
                    <p className="text-gray-600">Autodesk, 2016</p>
                  </li>
                  <li>
                    <h3 className="font-semibold">Revit Architecture Certification</h3>
                    <p className="text-gray-600">Autodesk, 2017</p>
                  </li>
                </ul>
              </motion.section>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AvailabilityIndicator />
          </div>
        </div>
      </section>

      <ServiceArea />
    </div>
  )
} 