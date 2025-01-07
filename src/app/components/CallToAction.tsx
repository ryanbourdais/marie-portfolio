import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'

export default function CallToAction() {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "marie.french@example.com",
      href: "mailto:marie.french@example.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "(555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Greater Toronto Area, ON",
      href: "https://maps.google.com/?q=Toronto,ON"
    }
  ]

  return (
    <section className="py-20 bg-accent text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss your project and create exceptional architectural drawings together
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="flex items-center gap-3 hover:text-white/80 transition-colors"
              >
                {info.icon}
                <div className="text-left">
                  <p className="text-sm text-white/70">{info.label}</p>
                  <p className="font-medium">{info.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-accent hover:bg-white/90"
            >
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/projects">
                View All Projects
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 