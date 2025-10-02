// Configuración condicional del runtime
export const getRuntime = () => {
  // Solo usa edge en build de Cloudflare
  if (process.env.CLOUDFLARE_BUILD === 'true') {
    return 'edge' as const
  }
  // En desarrollo y otros builds usa nodejs
  return undefined // No especificar runtime = usar default nodejs
}

// Exportar runtime solo si estamos en build de Cloudflare
export const runtime = process.env.CLOUDFLARE_BUILD === 'true' ? 'edge' : undefined
