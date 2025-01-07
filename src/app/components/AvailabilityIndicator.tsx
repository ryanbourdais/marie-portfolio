'use client'
import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

interface AvailabilityIndicatorProps {
  variant?: 'compact' | 'full'
  className?: string
}

export function AvailabilityIndicator({ variant = 'full', className = '' }: AvailabilityIndicatorProps) {
  const isAvailable = true
  const preferences = [
    'Full-time positions',
    'Architectural drafting roles',
    'On-site or hybrid'
  ]

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className={`w-2.5 h-2.5 rounded-full ${isAvailable ? 'bg-green-500' : 'bg-yellow-500'}`} />
        <span className="text-sm font-medium">
          {isAvailable ? 'Available for opportunities' : 'Limited availability'}
        </span>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-lg shadow-sm p-6 ${className}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-3 h-3 rounded-full ${isAvailable ? 'bg-green-500' : 'bg-yellow-500'}`} />
        <h3 className="font-semibold">
          {isAvailable ? 'Available for New Opportunities' : 'Limited Availability'}
        </h3>
      </div>

      <div className="space-y-4">
        <div className="flex gap-3">
          <Briefcase className="w-5 h-5 text-accent shrink-0" />
          <div>
            <p className="font-medium">Job Preferences</p>
            <ul className="text-sm text-gray-600 space-y-1 mt-1">
              {preferences.map((pref, index) => (
                <li key={index}>• {pref}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex gap-3">
          <Calendar className="w-5 h-5 text-accent shrink-0" />
          <div>
            <p className="font-medium">Interview Availability</p>
            <p className="text-sm text-gray-600">Available for interviews Mon-Fri, 9am-5pm CST</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}