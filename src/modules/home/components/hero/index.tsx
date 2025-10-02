import { Button, Heading } from "@medusajs/ui"
import Link from "next/link"

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-kst-lime/20 via-kst-magenta/20 to-kst-pink/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-kst-lime/10 via-transparent to-kst-pink/10 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Remeras que 
            <span className="text-kst-lime text-shadow-neon-lime"> BRILLAN</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Diseños únicos y estampados de alta calidad que destacan en cualquier ocasión. 
            <span className="text-kst-magenta"> Tu estilo, nuestra pasión.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-kst-lime text-black px-8 py-4 rounded-lg font-black hover:bg-kst-magenta hover:shadow-neon-lime transition-all duration-300 text-lg transform hover:scale-105 shadow-md border-2 border-kst-lime"
            >
              VER REMERAS ✨
            </Button>
            <Button 
              variant="transparent"
              className="border-2 border-kst-pink text-kst-pink px-8 py-4 rounded-lg font-bold hover:bg-kst-pink hover:text-black transition-all duration-300 text-lg"
            >
              Diseños Personalizados
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
