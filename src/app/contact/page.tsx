'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Loader2, Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { siteConfig } from '@/data/content'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    value: "frenchmarie10@gmail.com",
    href: "mailto:frenchmarie10@gmail.com"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: "Phone",
    value: "(225) 202-8227",
    href: "tel:+12252028227"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    label: "Location",
    value: "New Orleans, LA"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    label: "Available Hours",
    value: "Mon - Fri, 9am - 5pm CST"
  }
]

export default function ContactPage() {
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    try {
      const formData = new FormData()
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value)
      })
      formData.append('form-name', 'contact')

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      })

      setSubmitSuccess(true)
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-accent text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Work Together
            </h1>
            <p className="text-xl text-white/90">
              Looking for an experienced architectural draftsperson? Let's discuss how I can contribute to your team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
              <p className="text-gray-600 mb-12 text-center">
                I'm always interested in hearing about new opportunities and projects. 
                Feel free to reach out if you'd like to discuss working together.
              </p>
              <div className="space-y-6 max-w-md mx-auto">
                <div className="flex items-center space-x-4 justify-start">
                  <Mail className="w-6 h-6 text-accent" />
                  <h3 className="font-semibold w-24">Email</h3>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-600 hover:text-accent">
                    {siteConfig.contact.email}
                  </a>
                </div>
                <div className="flex items-center space-x-4 justify-start">
                  <MapPin className="w-6 h-6 text-accent" />
                  <h3 className="font-semibold w-24">Location</h3>
                  <p className="text-gray-600">New Orleans, LA</p>
                </div>
                <div className="flex items-center space-x-4 justify-start">
                  <Clock className="w-6 h-6 text-accent" />
                  <h3 className="font-semibold w-24">Availability</h3>
                  <p className="text-gray-600">Available for new projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 