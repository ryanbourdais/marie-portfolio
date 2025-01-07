'use client'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/app/components/ui/button'
import { Input } from '@/app/components/ui/input'
import { Textarea } from '@/app/components/ui/textarea'
import { useState } from 'react'
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react'
import { ServiceArea } from '../components/ServiceArea'
import { AvailabilityIndicator } from '../components/AvailabilityIndicator'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  position: z.string().min(1, 'Please select a position type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      // Create a hidden form and submit it to Netlify
      const formData = new FormData()
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value)
      })

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      })

      setSubmitSuccess(true)
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
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
            Let's Connect
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            I'm currently open to new opportunities in architectural drafting and design. 
            Let's discuss how my skills and experience can benefit your team.
          </p>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Form */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <form 
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit(onSubmit)} 
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name *</label>
                  <Input
                    {...register('name')}
                    placeholder="Your name"
                    className={errors.name ? 'border-red-500' : ''}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email *</label>
                  <Input
                    {...register('email')}
                    type="email"
                    placeholder="your.email@example.com"
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone (Optional)</label>
                  <Input
                    {...register('phone')}
                    type="tel"
                    placeholder="Your phone number"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Position Type *</label>
                  <select
                    {...register('position')}
                    className={`w-full rounded-md border ${
                      errors.position ? 'border-red-500' : 'border-gray-300'
                    } bg-white px-3 py-2`}
                  >
                    <option value="">Select a position type</option>
                    <option value="full-time">Full-time</option>
                    <option value="permanent">Permanent</option>
                    <option value="contract-to-hire">Contract-to-hire</option>
                  </select>
                  {errors.position && (
                    <p className="text-red-500 text-sm">{errors.position.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message *</label>
                <Textarea
                  {...register('message')}
                  placeholder="Tell me about your project..."
                  className={`h-32 ${errors.message ? 'border-red-500' : ''}`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full md:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>

              {submitSuccess && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600"
                >
                  Thank you! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-gray-50 p-6 rounded-lg space-y-6">
              <h2 className="text-xl font-bold">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-gray-600">Toronto, ON</p>
                    <p className="text-gray-600">Available for projects across Canada</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">contact@example.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600">(123) 456-7890</p>
                    <p className="text-sm text-gray-500">Mon - Fri, 9am - 5pm CST</p>
                  </div>
                </div>
              </div>
            </div>

            <AvailabilityIndicator />
          </motion.div>
        </div>
      </div>

      <ServiceArea />
    </div>
  )
} 