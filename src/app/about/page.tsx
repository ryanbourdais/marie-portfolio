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
          {/* <p className="text-xl text-white/90 max-w-2xl">
            An architectural draftswoman with a passion for creating functional, innovative designs 
            through detailed drafting and thoughtful project coordination. My architectural expertise 
            is complemented by specialized knowledge in architectural history and effective communication.
          </p> */}
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
              With a Bachelor's degree in Architecture from Louisiana State University and specialized minors in Architectural History and Communication Studies, I bring a unique blend of technical expertise and effective communication to every project. My professional journey spans both commercial and residential projects, where I've honed my skills in architectural drafting, project coordination, and client collaboration. I specialize in creating detailed construction documents, 3D visualizations, and permit drawings that bring architectural visions to life. My passion lies in developing innovative solutions that not only meet technical requirements but also enhance the functionality and aesthetic appeal of each space. Whether working on custom homes, commercial spaces, or renovation projects, I maintain unwavering attention to detail and a commitment to exceeding client expectations.

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
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-4">Architectural Software</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Revit</li>
                      <li>• Rhino</li>
                      <li>• AutoCAD</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">3D Visualization</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• V-Ray</li>
                      <li>• Enscape</li>
                      <li>• Revit Rendering</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-4">Design & Rendering</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Adobe Photoshop</li>
                      <li>• Adobe Illustrator</li>
                      <li>• Adobe InDesign</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Custom Millwork Design</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Concept Development</li>
                      <li>• 3D Printing</li>
                      <li>• CNC Work</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Professional Skills */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">Professional Skills</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-4">Project Management</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Scheduling</li>
                    <li>• Documentation</li>
                    <li>• Construction Documents</li>
                    <li>• Client Coordination</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Communication</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Presentation Development</li>
                    <li>• Technical Writing</li>
                    <li>• Permitting Documentation</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Awards & Achievements */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-4">Awards & Achievements</h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-semibold">Dean's List</h3>
                  <p className="text-gray-600">Recognized for academic excellence in 2021 and 2022.</p>
                </li>
                <li>
                  <h3 className="font-semibold">LSU CXC Distinction</h3>
                  <p className="text-gray-600">Honored for outstanding communication skills across disciplines.</p>
                </li>
              </ul>
            </motion.section>

            {/* Education */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-semibold">Bachelor's Degree in Architecture</h3>
                  <p className="text-gray-600">Louisiana State University</p>
                  <p className="text-gray-600 text-sm">Minors: Architectural History and Communication Studies</p>
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
                <p className="text-gray-600">Based in New Orleans, LA</p>
                <p className="text-gray-600">Available for projects across America</p>
              </div>
              <div className="space-y-3">
                <Button asChild className="w-full">
                  <Link href="/contact">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Me
                  </Link>
                </Button>
                <h3 className="font-semibold pt-4">Downloads</h3>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('/portfolio.pdf', '_blank')}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Portfolio
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
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