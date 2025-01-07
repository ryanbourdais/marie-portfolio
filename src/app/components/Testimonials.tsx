import { Quote } from 'lucide-react'

interface TestimonialProps {
  quote: string
  author: string
  role: string
  company?: string
}

const Testimonial = ({ quote, author, role, company }: TestimonialProps) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <Quote className="w-10 h-10 text-accent/20 mb-4" />
    <blockquote className="text-gray-600 mb-6">
      "{quote}"
    </blockquote>
    <div>
      <cite className="not-italic font-semibold text-gray-800">
        {author}
      </cite>
      <p className="text-sm text-gray-500">
        {role}{company ? `, ${company}` : ''}
      </p>
    </div>
  </div>
)

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Marie's attention to detail and understanding of building codes made our home renovation process smooth and efficient. Her technical drawings were precise and exactly what we needed.",
      author: "Michael Roberts",
      role: "Homeowner",
      company: "Custom Home Project"
    },
    {
      quote: "Working with Marie on our office redesign was a great experience. She understood our needs perfectly and delivered exceptional technical documentation that met all requirements.",
      author: "Sarah Chen",
      role: "Project Manager",
      company: "Modern Workspace Solutions"
    },
    {
      quote: "Marie's expertise in both residential and commercial drafting has been invaluable. Her technical skills and professional approach make her our go-to draftsman.",
      author: "David Thompson",
      role: "Principal Architect",
      company: "Thompson Design Group"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 