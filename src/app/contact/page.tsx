'use client'
import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Loader2, Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

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
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Contact Information Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-10"
            >
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="grid gap-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-6"
                  >
                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                      {React.cloneElement(info.icon, { className: "w-8 h-8 text-accent" })}
                    </div>
                    <div>
                      <p className="text-xl font-medium text-gray-900 mb-1">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-lg text-gray-600 hover:text-accent transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg text-gray-600">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 