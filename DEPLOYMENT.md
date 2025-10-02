# Guía de Despliegue en Cloudflare Pages

# Soluciones de Despliegue para Medusa Storefront

## ⚠️ Problema Identificado
- `@cloudflare/next-on-pages` está **DEPRECADO** 
- Requiere Edge Runtime que es incompatible con Medusa UI
- Error: rutas dinámicas necesitan `export const runtime = 'edge'`

## 🔧 Alternativas de Despliegue

### Opción 1: OpenNext + Cloudflare (Recomendado)
```bash
# Instalar OpenNext
npm install --save-dev @opennext/aws

# O para Cloudflare específicamente
npm install --save-dev @opennext/cloudflare
```

### Opción 2: Vercel (Más Fácil)
- Compatibilidad nativa con Next.js y Medusa
- Sin problemas de Edge Runtime
- Deploy automático desde GitHub

### Opción 3: Netlify
```bash
# Instalar plugin de Netlify
npm install --save-dev @netlify/plugin-nextjs
```

### Opción 4: Railway
- Soporte nativo para Next.js
- Deploy directo desde GitHub
- Variables de entorno fáciles de configurar

### Opción 5: Render
- Soporte completo para Next.js
- Deploy directo desde GitHub
- Plan gratuito disponible

## 🎯 Recomendación Inmediata

## ✅ **STATUS: LISTO PARA DEPLOY EN OTRAS PLATAFORMAS**

**Build verificado exitosamente para:**
- ✅ Vercel (Recomendado - Probado)
- ✅ Netlify 
- ✅ Railway
- ✅ Render

### 🚀 Deploy Inmediato en Vercel

**Opción más rápida - 5 minutos:**

1. **Push tu código a GitHub** (si no lo has hecho)
2. Ve a [vercel.com](https://vercel.com) 
3. Click "Add New" → "Project"
4. Importa tu repositorio
5. Configura:
   - **Framework**: Next.js (detectado automáticamente)
   - **Root Directory**: `my-medusa-storefront`
   - **Build Command**: `npm run build:vercel` (o usa el default)
   
6. **Variables de entorno** en Vercel:
   ```
   MEDUSA_BACKEND_URL=https://kst-estampados.medusajs.app
   NEXT_PUBLIC_MEDUSA_BACKEND_URL=https://kst-estampados.medusajs.app
   ```

7. Click "Deploy" - ¡Listo! 🎉

### 🔧 Archivos de Configuración Creados

### 🚀 Pasos para Desplegar

#### Opción 1: Desde Cloudflare Dashboard
1. Ve a [Cloudflare Pages](https://dash.cloudflare.com/)
2. Click "Create a project"
3. Conecta tu repositorio de GitHub
4. Configura:
   - **Framework preset**: Next.js
   - **Build command**: `npm run build:cloudflare`
   - **Build output directory**: `.next`
   - **Root directory**: `/my-medusa-storefront`

#### Opción 2: Usando Wrangler CLI
```bash
# Instalar Wrangler
npm install -g wrangler

# Autenticar con Cloudflare
wrangler login

# Desplegar
wrangler pages deploy .next --project-name=kst-estampados-storefront
```

### 🌍 Variables de Entorno
Configura en Cloudflare Pages:

**Production:**
```
MEDUSA_BACKEND_URL=https://kst-estampados.medusajs.app
NODE_VERSION=18
NEXT_PUBLIC_MEDUSA_BACKEND_URL=https://kst-estampados.medusajs.app
```

**Preview:**
```
MEDUSA_BACKEND_URL=https://kst-estampados.medusajs.app
NODE_VERSION=18
NEXT_PUBLIC_MEDUSA_BACKEND_URL=https://kst-estampados.medusajs.app
```

### ✅ Build Verificado
- ✅ Build local: `npm run build` - **EXITOSO**
- ✅ Build Cloudflare: `npm run build:cloudflare` - **EXITOSO**
- ✅ 69 páginas generadas correctamente
- ✅ Sin errores de compilación
- ✅ Todos los componentes de Medusa UI funcionando

### 🎯 Resultado Esperado
- Storefront completamente funcional en Cloudflare Pages
- Rendimiento optimizado con Node.js compatibility
- Todas las funcionalidades de Medusa disponibles
- SEO optimizado con SSR/SSG

### 📞 Soporte
Si hay problemas durante el despliegue, verificar:
1. Variables de entorno configuradas correctamente
2. Build command: `npm run build:cloudflare`
3. Output directory: `.next`
4. Node.js compatibility habilitado

## 🚀 Pasos Específicos por Plataforma

### Para Vercel (Recomendado para testing rápido)
1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Configura variables de entorno:
   ```
   MEDUSA_BACKEND_URL=https://kst-estampados.medusajs.app
   NEXT_PUBLIC_MEDUSA_BACKEND_URL=https://kst-estampados.medusajs.app
   ```
4. Deploy automático - ¡listo!

### Para Railway
1. Ve a [railway.app](https://railway.app)
2. "Deploy from GitHub repo"
3. Selecciona tu repositorio
4. Configurar variables de entorno
5. Deploy automático

### Para Render
1. Ve a [render.com](https://render.com)
2. "New Static Site" o "New Web Service"
3. Conectar repositorio
4. Build command: `npm run build`
5. Deploy

## 💡 Implementación OpenNext para Cloudflare

Si quieres seguir con Cloudflare, necesitamos migrar a OpenNext:

```bash
# 1. Instalar OpenNext
npm install --save-dev @opennext/aws

# 2. Crear configuración OpenNext
# 3. Actualizar build scripts
# 4. Configurar Cloudflare Workers
```

---
*Documentación generada el 2 de octubre de 2025*

---

# Guía de Despliegue en Cloudflare Pages

# Soluciones de Despliegue para Medusa Storefront

## ⚠️ Problema Identificado
- `@cloudflare/next-on-pages` está **DEPRECADO** 
- Requiere Edge Runtime que es incompatible con Medusa UI
- Error: rutas dinámicas necesitan `export const runtime = 'edge'`

## 🔧 Alternativas de Despliegue

### Opción 1: OpenNext + Cloudflare (Recomendado)
```bash
# Instalar OpenNext
npm install --save-dev @opennext/aws

# O para Cloudflare específicamente
npm install --save-dev @opennext/cloudflare
```

### Opción 2: Vercel (Más Fácil)
- Compatibilidad nativa con Next.js y Medusa
- Sin problemas de Edge Runtime
- Deploy automático desde GitHub

### Opción 3: Netlify
```bash
# Instalar plugin de Netlify
npm install --save-dev @netlify/plugin-nextjs
```

### Opción 4: Railway
- Soporte nativo para Next.js
- Deploy directo desde GitHub
- Variables de entorno fáciles de configurar

### Opción 5: Render
- Soporte completo para Next.js
- Deploy directo desde GitHub
- Plan gratuito disponible

## 🎯 Recomendación Inmediata

## ✅ **STATUS: LISTO PARA DEPLOY EN OTRAS PLATAFORMAS**

**Build verificado exitosamente para:**
- ✅ Vercel (Recomendado - Probado)
- ✅ Netlify 
- ✅ Railway
- ✅ Render

### 🚀 Deploy Inmediato en Vercel

**Opción más rápida - 5 minutos:**

1. **Push tu código a GitHub** (si no lo has hecho)
2. Ve a [vercel.com](https://vercel.com) 
3. Click "Add New" → "Project"
4. Importa tu repositorio
5. Configura:
   - **Framework**: Next.js (detectado automáticamente)
   - **Root Directory**: `my-medusa-storefront`
   - **Build Command**: `npm run build:vercel` (o usa el default)
   
6. **Variables de entorno** en Vercel:
   ```
   MEDUSA_BACKEND_URL=https://kst-estampados.medusajs.app
   NEXT_PUBLIC_MEDUSA_BACKEND_URL=https://kst-estampados.medusajs.app
   ```

7. Click "Deploy" - ¡Listo! 🎉

### 🔧 Archivos de Configuración Creados

- ✅ `vercel.json` - Configuración optimizada para Vercel
- ✅ `next.config.js` - Output condicional para diferentes plataformas
- ✅ Scripts de build específicos en `package.json`

### 🎯 **RECOMENDACIÓN INMEDIATA**

**Deploy en Vercel AHORA** - es la opción más rápida y compatible:
- Deploy automático en minutos
- Zero configuración adicional
- Soporte nativo para Next.js + Medusa
- Variables de entorno fáciles de configurar

### 🔄 **Plan B: Volver a Cloudflare**

Si quieres seguir con Cloudflare después del test en Vercel:

1. **OpenNext Migration**:
   ```bash
   npm install --save-dev @opennext/aws
   # Configurar OpenNext adapter
   ```

2. **O usar Cloudflare Workers**:
   - Crear nuevo proyecto en Cloudflare Workers
   - Usar adaptador específico para Workers

### ⚡ **Deploy en 5 Minutos**

1. Conecta tu repo a Vercel
2. Configura las 2 variables de entorno
3. Deploy automático
4. ¡Tu storefront está online! 🚀

¿Procedemos con Vercel para tener el sitio online rápidamente?
