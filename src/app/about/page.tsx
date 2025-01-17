'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '../components/ui/button'
import Link from 'next/link'
import { Download, Mail } from 'lucide-react'
import { ServiceArea } from '../components/ServiceArea'
import { ProfileImage } from '../components/ProfileImage'
import { AvailabilityIndicator } from '../components/AvailabilityIndicator'
import { useState, useEffect } from 'react'
import { generatePDF } from '../components/pdf/generatePDF'
import { PiCrossThin } from "react-icons/pi";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Music } from 'lucide-react'

export default function AboutPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [sequence, setSequence] = useState<string[]>([]);
  const [touchSequence, setTouchSequence] = useState<string[]>([]);
  const [showSecret, setShowSecret] = useState(false);
  const [showCross, setShowCross] = useState(false);
  const [profileClicks, setProfileClicks] = useState(0);
  const correctSequence = ['m', 'a', 'r', 'i', 'e'];
  const correctTouchSequence = ['title', 'skills', 'education'];
  const [audio] = useState(typeof Audio !== 'undefined' ? new Audio('/secret.mp3') : null);

  const checkSecret = () => {
    audio?.play();
    setShowSecret(true);
    setSequence([]);
    setTouchSequence([]);
  };

  const handleTitleClick = (sectionId: string) => {
    const newSequence = [...touchSequence, sectionId];
    setTouchSequence(newSequence);

    if (newSequence.length === correctTouchSequence.length) {
      if (JSON.stringify(newSequence) === JSON.stringify(correctTouchSequence)) {
        checkSecret();
      }
      setTouchSequence([]);
    } else if (newSequence.length > correctTouchSequence.length) {
      setTouchSequence([]);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const newSequence = [...sequence, event.key.toLowerCase()];
      setSequence(newSequence);

      if (newSequence.length === correctSequence.length) {
        if (JSON.stringify(newSequence) === JSON.stringify(correctSequence)) {
          checkSecret();
        }
        setSequence([]);
      } else if (newSequence.length > correctSequence.length) {
        setSequence([]);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [sequence, audio]);

  const handleProfileClick = () => {
    const newCount = profileClicks + 1;
    setProfileClicks(newCount);
    
    if (newCount === 3) {
      setShowCross(true);
      setProfileClicks(0);
    }
  };

  const handleDownload = async () => {
    try {
      setIsGenerating(true);
      await generatePDF();
    } catch (error) {
      console.error('Failed to generate PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <>
      <Dialog open={showSecret} onOpenChange={setShowSecret}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">You found the secret!</DialogTitle>
            <div className="flex flex-col items-center space-y-4 pt-4">
              <h3 className="text-lg font-semibold text-gray-700">Isaiah 43:19</h3>
              <p className="text-center text-gray-600 italic">
                "Behold, I am doing a new thing; now it springs forth, do you not perceive it? 
                I will make a way in the wilderness and rivers in the desert."
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-full mt-4">
                <Music className="w-4 h-4" />
                <span>Now Playing: "Look up Child" - Lauren Daigle</span>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>

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
                <h2 
                  className="text-2xl font-bold mb-4 cursor-pointer" 
                  onClick={() => handleTitleClick('title')}
                >
                  Professional Background
                </h2>
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
                <h2 
                  className="text-2xl font-bold cursor-pointer"
                  onClick={() => handleTitleClick('skills')}
                >
                  Technical Skills
                </h2>
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

              {/* Education */}
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h2 
                  className="text-2xl font-bold mb-4 cursor-pointer"
                  onClick={() => handleTitleClick('education')}
                >
                  Education
                </h2>
                <ul className="space-y-4">
                  <li>
                    <h3 className="font-semibold">Bachelor's Degree in Architecture</h3>
                    <p className="text-gray-600">Louisiana State University</p>
                    <p className="text-gray-600 text-sm">Minors: Architectural History and Communication Studies</p>
                  </li>
                </ul>
              </motion.section>

              {/* Awards & Achievements */}
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
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
            </div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-8"
            >
              {/* Profile Image */}
              <div onClick={handleProfileClick}>
                <ProfileImage />
              </div>

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
                    onClick={() => window.open('/resume.pdf', '_blank')}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                  <Button 
                    variant="outline" 
                    className={`w-full ${isGenerating
                    ? 'opacity-50 cursor-not-allowed' : 'hover:text-accent'}`}
                    // style={{display: 'none'}}
                    onClick={handleDownload}
                    disabled={isGenerating}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    <span className="hidden lg:inline">
                      {isGenerating ? 'Generating...' : 'Download Portfolio'}
                    </span>
                  </Button>
                </div>
              </div>

              {/* Availability Status */}
              <AvailabilityIndicator />
            </motion.div>
          </div>
        </div>

        <div className="flex justify-end pr-4 mb-4">
          {showCross && <PiCrossThin className="text-gray-400 w-6 h-6" />}
        </div>
        <ServiceArea />
      </div>
    </>
  )
} 