import { heroContent } from '@/data/content'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0 parallax-container">
        <div className="parallax-image">
          <Image
            src={heroContent.backgroundImage}
            alt="Featured architectural project"
            fill
            className="object-cover object-[center_40%] w-full"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      <div className="relative container mx-auto px-4 h-full z-10">
        <div className="flex items-center h-full">
          <div className="max-w-2xl text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
              {heroContent.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-slide-up delay-200">
              {heroContent.subtitle}
            </p>
            <div className="flex gap-4 animate-slide-up delay-300">
              <Link href="/projects">
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90"
                >
                  {heroContent.buttons.primary}
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-white border-white hover:bg-white/10"
                >
                  {heroContent.buttons.secondary}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 