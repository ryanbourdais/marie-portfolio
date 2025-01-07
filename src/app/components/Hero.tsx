import Image from 'next/image'
import { Button } from './ui/button'

export default function Hero() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0 parallax-container">
        <div className="parallax-image">
          <Image
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
            alt="Featured architectural project"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      {/* Content - Now with personal focus */}
      <div className="relative container mx-auto px-4 h-full z-10">
        <div className="flex items-center h-full">
          <div className="max-w-2xl text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
              Hi, I'm Marie French
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-slide-up delay-200">
              Architectural Draftsman specializing in bringing your residential 
              and commercial design visions to life with precision and creativity.
            </p>
            <div className="flex gap-4 animate-slide-up delay-300">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90"
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-white border-white hover:bg-white/10"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 