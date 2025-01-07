import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('./components/Hero'), { ssr: true })
const Services = dynamic(() => import('./components/Services'), { ssr: true })
const FeaturedProjects = dynamic(() => import('./components/FeaturedProjects'), { ssr: true })
const Skills = dynamic(() => import('./components/Skills'), { ssr: true })
const Testimonials = dynamic(() => import('./components/Testimonials'), { ssr: true })
const CallToAction = dynamic(() => import('./components/CallToAction'), { ssr: true })

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <FeaturedProjects />
      <Skills />
      <Testimonials />
      <CallToAction />
    </main>
  )
} 