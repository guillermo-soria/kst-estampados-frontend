# Guía de Despliegue en Cloudflare Pages

## ✅ Estado Actual
El proyecto está **LISTO PARA DESPLEGAR** en Cloudflare Pages con las siguientes configuraciones:

### 🔧 Configuraciones Implementadas

1. **Node.js Compatibility Mode**: Configurado en `wrangler.toml`
2. **Build Commands**: Optimizados para Cloudflare (`npm run build:cloudflare`)
3. **Runtime Configuration**: Sin Edge Runtime forzado, permite Node.js compatibility
4. **All Components**: Funcionando correctamente con Medusa UI

### 📋 Archivos de Configuración

- ✅ `wrangler.toml` - Configuración principal de Cloudflare
- ✅ `next.config.js` - Configuración optimizada de Next.js
- ✅ `package.json` - Scripts de build configurados
- ✅ `_redirects` - Configuración de redirects para Cloudflare Pages

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

---
*Documentación generada el 2 de octubre de 2025*
