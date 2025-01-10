'use client'
import { motion } from 'framer-motion'
import { MapPin, Globe, Car } from 'lucide-react'

const locations = [
  {
    city: "New Orleans",
    province: "LA",
    type: "Current Location",
    info: "Immediately available",
    icon: MapPin,
  },
  {
    city: "Greater New Orleans Area",
    province: "LA",
    type: "Preferred Area",
    info: "No relocation needed",
    icon: Car,
  },
  {
    city: "Remote Work",
    province: "America-wide",
    type: "Remote Options",
    info: "Open to remote positions",
    icon: Globe,
  },
]

export function ServiceArea() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Location Preferences</h2>
          <p className="text-gray-600">
            Based in New Orleans, open to opportunities in the GNO and remote positions across America.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location, index) => {
            const Icon = location.icon
            return (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{location.city}</h3>
                    <p className="text-sm text-gray-500">{location.province}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">{location.type}</p>
                  <p className="text-sm text-gray-600">{location.info}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            For projects outside these areas, please <a href="/contact" className="text-accent hover:underline">contact me</a> to discuss remote work options.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 