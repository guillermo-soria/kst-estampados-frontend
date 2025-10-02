import { Button, Heading, Text } from "@medusajs/ui"
import Link from "next/link"

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-kst-magenta to-kst-pink relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-kst-lime/10 via-transparent to-kst-pink/10 animate-pulse"></div>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <Heading level="h2" className="text-4xl md:text-5xl font-bold mb-6 text-white">
          ¿Listo para destacar con tu <span className="text-kst-lime">estilo único</span>?
        </Heading>
        <Text className="text-xl mb-8 text-gray-300">
          Únete a miles de personas que ya visten remeras KST y marcan la diferencia
        </Text>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-kst-lime text-black px-8 py-4 rounded-lg font-black hover:bg-kst-magenta hover:shadow-neon-lime transition-all duration-300 inline-block transform hover:scale-105">
            EXPLORAR CATÁLOGO
          </Button>
          <Button 
            variant="transparent"
            className="border-2 border-kst-pink text-kst-pink px-8 py-4 rounded-lg font-bold hover:bg-kst-pink hover:text-black transition-all duration-300 text-lg"
          >
            Diseño Personalizado
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CTASection
