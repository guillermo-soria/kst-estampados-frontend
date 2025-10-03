'use client'

import { useState, useEffect } from 'react'

export default function UnderConstruction() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-kst-lime/10 via-kst-magenta/10 to-kst-pink/10 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-kst-pink/5 via-transparent to-kst-lime/5 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-4">
            KST
            <span className="text-kst-lime text-shadow-neon-lime"> ESTAMPADOS</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-kst-lime via-kst-magenta to-kst-pink mx-auto rounded-full"></div>
        </div>

        {/* Construction message */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            🚧 En <span className="text-kst-magenta">Construcción</span> 🚧
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Estamos trabajando para traerte la mejor experiencia en 
            <span className="text-kst-lime font-semibold"> remeras estampadas</span> y 
            <span className="text-kst-pink font-semibold"> diseños únicos</span>.
          </p>
          <p className="text-lg text-gray-400">
            ¡Muy pronto estaremos online con todo nuestro catálogo!
          </p>
        </div>

        {/* Features preview */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-dark-50/50 to-dark-100/50 backdrop-blur-sm border border-kst-lime/20 rounded-xl p-6">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold text-kst-lime mb-2">Diseños Únicos</h3>
            <p className="text-gray-400">Creaciones exclusivas que no encontrarás en ningún otro lugar</p>
          </div>
          <div className="bg-gradient-to-br from-dark-50/50 to-dark-100/50 backdrop-blur-sm border border-kst-magenta/20 rounded-xl p-6">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-kst-magenta mb-2">Calidad Premium</h3>
            <p className="text-gray-400">Estampados duraderos con técnicas de última generación</p>
          </div>
          <div className="bg-gradient-to-br from-dark-50/50 to-dark-100/50 backdrop-blur-sm border border-kst-pink/20 rounded-xl p-6">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-kst-pink mb-2">Envío Rápido</h3>
            <p className="text-gray-400">Recibe tus remeras en 24-48 horas</p>
          </div>
        </div>

        {/* Contact info */}
        <div className="bg-gradient-to-r from-kst-lime/10 via-kst-magenta/10 to-kst-pink/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">¿Necesitas algo urgente?</h3>
          <p className="text-gray-300 mb-6">¡Contáctanos! Seguimos atendiendo pedidos personalizados</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:info@kst-estampados.com" 
              className="bg-kst-lime text-black px-6 py-3 rounded-lg font-bold hover:bg-kst-magenta transition-all duration-300 inline-block"
            >
              📧 info@kst-estampados.com
            </a>
            <a 
              href="tel:+1234567890" 
              className="border-2 border-kst-pink text-kst-pink px-6 py-3 rounded-lg font-bold hover:bg-kst-pink hover:text-black transition-all duration-300 inline-block"
            >
              📱 WhatsApp
            </a>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="max-w-md mx-auto">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Progreso del sitio</span>
            <span>85%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
            <div className="bg-gradient-to-r from-kst-lime via-kst-magenta to-kst-pink h-full rounded-full animate-pulse" style={{width: '85%'}}></div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            © 2025 KST Estampados. Diseños que brillan, calidad que perdura.
          </p>
        </div>
      </div>
    </div>
  )
}
