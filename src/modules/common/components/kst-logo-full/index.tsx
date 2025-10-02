const KSTLogoFull = ({ className = "w-32 h-40" }: { className?: string }) => {
  return (
    <div className={`${className} relative flex items-center justify-center`}>
      {/* Contenedor principal del logo */}
      <div className="relative">
        {/* Texto circular superior */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-full">
          <div className="text-white text-xs font-bold tracking-wider text-center">
            <div className="flex items-center justify-center space-x-1">
              <span>IMPRESIÓN</span>
              <span>EN</span>
              <span>SERIGRAFÍA</span>
            </div>
          </div>
        </div>
        
        {/* Marco principal */}
        <div className="relative w-24 h-32 bg-gradient-to-b from-kst-green via-kst-green to-kst-magenta rounded-t-xl border-2 border-kst-green shadow-lg">
          {/* Líneas superiores (papel) */}
          <div className="absolute top-3 left-3 right-3 space-y-1">
            <div className="h-0.5 bg-black/70 rounded"></div>
            <div className="h-0.5 bg-black/70 rounded"></div>
            <div className="h-0.5 bg-black/70 rounded w-3/4"></div>
          </div>
          
          {/* Área principal con texto KST */}
          <div className="absolute top-10 bottom-3 left-2 right-2 bg-gradient-to-b from-kst-magenta to-kst-magenta-dark rounded shadow-inner">
            <div className="flex items-center justify-center h-full">
              <span className="text-white font-black text-2xl tracking-wider transform -rotate-12 drop-shadow-lg">
                KST
              </span>
            </div>
          </div>
        </div>
        
        {/* Puntos decorativos */}
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full shadow-md"></div>
          <div className="w-1.5 h-1.5 bg-white rounded-full shadow-md"></div>
          <div className="w-1.5 h-1.5 bg-white rounded-full shadow-md"></div>
        </div>
      </div>
    </div>
  )
}

export default KSTLogoFull
