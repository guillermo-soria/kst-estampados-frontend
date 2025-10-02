// Configuración para modo de construcción
export const UNDER_CONSTRUCTION = {
  enabled: true, // Cambiar a false cuando esté listo
  allowedPaths: [
    '/admin', // Permitir acceso al admin
    '/api',   // Permitir APIs
  ],
  adminSecret: 'kst-admin-2025' // Para acceso temporal
}

export const isUnderConstruction = (pathname: string): boolean => {
  if (!UNDER_CONSTRUCTION.enabled) return false
  
  return !UNDER_CONSTRUCTION.allowedPaths.some(path => 
    pathname.startsWith(path)
  )
}
