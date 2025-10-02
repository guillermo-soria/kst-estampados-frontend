# 🚀 Deploy KST Estampados Storefront en Vercel

## ✅ Estado: LISTO PARA DEPLOY

### 📋 Pasos para Deploy en Vercel (5 minutos)

**1. Preparar repositorio:**
```bash
# Asegúrate de que todos los cambios estén en GitHub
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

**2. Deploy en Vercel:**
1. Ve a [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Conecta tu cuenta de GitHub si no lo has hecho
4. Busca tu repositorio y click "Import"

**3. Configuración del proyecto:**
- **Framework Preset**: Next.js (se detecta automáticamente)
- **Root Directory**: `my-medusa-storefront` ⚠️ **IMPORTANTE**
- **Build Command**: `npm run build` (default está bien)
- **Output Directory**: `.next` (default está bien)

**4. Variables de entorno:**
Agregar estas 2 variables en la sección "Environment Variables":
```
MEDUSA_BACKEND_URL=https://kst-estampados.medusajs.app
NEXT_PUBLIC_MEDUSA_BACKEND_URL=https://kst-estampados.medusajs.app
```

**5. Deploy:**
- Click "Deploy"
- Esperar ~2-3 minutos
- ¡Tu storefront estará online! 🎉

### 🔧 Archivos listos para Vercel:
- ✅ `vercel.json` - Configuración optimizada
- ✅ `next.config.js` - Output optimizado 
- ✅ Build verificado exitosamente
- ✅ 69 páginas generadas sin errores

### 🎯 Después del deploy:
1. Vercel te dará una URL (ej: `https://tu-proyecto.vercel.app`)
2. Puedes configurar un dominio personalizado
3. Deploys automáticos en cada push a main

### ⚠️ Nota importante:
Asegúrate de configurar **Root Directory** como `my-medusa-storefront` porque el proyecto está en una subcarpeta del repo.

### 🆘 Troubleshooting:
Si hay problemas:
1. Verificar que las variables de entorno estén bien configuradas
2. Revisar que el Root Directory sea correcto
3. El build tarda ~2-3 minutos, es normal

---

## 🔄 Alternativas si Vercel no funciona:

### Railway (Plan B):
1. [railway.app](https://railway.app) 
2. "Deploy from GitHub repo"
3. Mismas variables de entorno

### Netlify (Plan C):
1. [netlify.com](https://netlify.com)
2. "Add new site" → "Import an existing project"
3. Configurar build: `npm run build:netlify`

---

## 🔧 Modo "En Construcción" Activado

**Estado actual**: La página principal muestra un mensaje de "En construcción" elegante y profesional.

**Para desactivar cuando esté listo:**
1. Edita el archivo `src/lib/under-construction.ts`
2. Cambia `enabled: true` a `enabled: false`
3. Commit y push los cambios
4. Deploy automático en Vercel

**Funcionalidades del modo construcción:**
- ✅ Página elegante con branding de KST
- ✅ Información de contacto
- ✅ Preview de funcionalidades futuras
- ✅ Barra de progreso (85% completado)
- ✅ Responsive design
- ✅ Animaciones sutiles
- ✅ Mantiene la estética del brand

**Rutas que siguen funcionando:**
- `/admin` - Acceso al panel de administración
- `/api/*` - Todas las APIs de Medusa

---

*Documentación actualizada - 2 de octubre de 2025*
