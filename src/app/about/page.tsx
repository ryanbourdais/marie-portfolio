'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '../components/ui/button'
import Link from 'next/link'
import { Download, Mail } from 'lucide-react'
import { ServiceArea } from '../components/ServiceArea'
import { ProfileImage } from '../components/ProfileImage'
import { AvailabilityIndicator } from '../components/AvailabilityIndicator'

export default function AboutPage() {
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Bio and Experience */}
          <div className="md:col-span-2 space-y-8">
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

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <ProfileImage />

            {/* Contact Info */}
            <div className="bg-gray-50 p-6 rounded-lg space-y-6">
              <h3 className="font-semibold">Contact Information</h3>
              <div className="space-y-4">
                <p className="text-gray-600">Based in Toronto, ON</p>
                <p className="text-gray-600">Available for projects across Canada</p>
              </div>
              <div className="space-y-3">
                <Button asChild className="w-full">
                  <Link href="/contact">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Me
                  </Link>
                </Button>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
{/* test */}
      <AvailabilityIndicator className="mt-8" />

      <ServiceArea />
    </div>
  )
} 