const KSTLogo = ({ className = "w-8 h-10" }: { className?: string }) => {
  return (
    <div className={`${className} relative flex items-center justify-center`}>
      {/* Marco principal simplificado para navbar */}
      <div className="relative bg-gradient-to-b from-kst-green to-kst-magenta rounded-md border border-kst-green/50 p-1">
        {/* Texto KST */}
        <div className="flex items-center justify-center text-black font-black text-xs">
          KST
        </div>
      </div>
    </div>
  )
}

export default KSTLogo
