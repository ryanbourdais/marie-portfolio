import { Building2, PenTool, Home, Factory, FileStack, Compass, FileCheck } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => (
  <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="w-12 h-12 text-accent mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

export default function Services() {
  const services = [
    {
      title: "Residential Drafting",
      description: "I create detailed plans for custom homes, renovations, and additions that match your vision and lifestyle.",
      icon: <Home className="w-full h-full" />
    },
    {
      title: "Commercial Planning",
      description: "I develop efficient and compliant drawings for office spaces, retail stores, and small commercial buildings.",
      icon: <Building2 className="w-full h-full" />
    },
    {
      title: "Technical Documentation",
      description: "I prepare comprehensive construction documents and permit drawings with meticulous attention to detail.",
      icon: <FileStack className="w-full h-full" />
    },
    {
      title: "3D Visualization",
      description: "I bring your projects to life with photorealistic 3D renderings and virtual walkthroughs.",
      icon: <Compass className="w-full h-full" />
    },
    {
      title: "As-Built Drawings",
      description: "I create accurate documentation of existing structures for your renovation or addition projects.",
      icon: <PenTool className="w-full h-full" />
    },
    {
      title: "Building Permits",
      description: "I handle the technical documentation needed for successful building permit applications.",
      icon: <FileCheck className="w-full h-full" />
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I offer comprehensive drafting and design services to help bring your architectural projects to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 