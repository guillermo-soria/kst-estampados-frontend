'use client'

import { useState, useEffect } from 'react'

export default function UnderConstruction() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      
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
            Estamos trabajando duro para traerte la mejor experiencia en 
            <span className="text-kst-lime font-semibold"> remeras estampadas</span> y 
            <span className="text-kst-pink font-semibold"> diseños únicos</span>.
          </p>
          <p className="text-lg text-gray-400">
            ¡Muy pronto estaremos online con todo nuestro catálogo!
          </p>
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
        <div className="mt-16">
          <p className="text-white text-base font-normal">
            © 2025 KST Estampados. Diseños que brillan, calidad que perdura.
          </p>
        </div>
      </div>
    </div>
  )
}
