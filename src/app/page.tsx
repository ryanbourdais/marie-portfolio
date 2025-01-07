import Hero from './components/Hero'
import Services from './components/Services'
import FeaturedProjects from './components/FeaturedProjects'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import CallToAction from './components/CallToAction'

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <FeaturedProjects />
      <Skills />
      <Testimonials />
      <CallToAction />
    </div>
  )
} 