# 🌟 KST Estampados - Frontend (Next.js)

Frontend de la tienda online KST Estampados desarrollado con Next.js y diseño neón personalizado.

## ✨ Características

### 🎨 Diseño Personalizado
- **Tema neón**: Paleta de colores vibrantes con verde ácido (#39FF14), magenta (#FF0080) y rosa (#FF69B4)
- **Interfaz moderna**: Gradientes, sombras neón y animaciones fluidas
- **Responsive**: Adaptado para dispositivos móviles y desktop
- **Modo oscuro**: Fondo negro con acentos neón para una experiencia visual inmersiva

### 🛍️ Funcionalidades E-commerce
- **Catálogo de productos**: Grid de productos con filtros y ordenamiento
- **Carrito inteligente**: Contador dinámico que se actualiza en tiempo real
- **Gestión de usuarios**: Sistema de autenticación y perfiles
- **Navegación optimizada**: Menú horizontal con iconos SVG personalizados
- **Experiencia fluida**: Transiciones suaves y efectos hover

### 🚀 Tecnologías

- **Next.js 15** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework CSS utility-first
- **Medusa.js SDK** - Integración con backend e-commerce
- **React** - Biblioteca de interfaz de usuario

## 🎨 Paleta de Colores KST

```css
/* Colores principales */
--kst-lime: #39FF14;        /* Verde ácido neón */
--kst-magenta: #FF0080;     /* Magenta vibrante */
--kst-pink: #FF69B4;        /* Rosa neón */
--kst-green: #00FF41;       /* Verde Matrix */

/* Fondos y grises */
--background: #000000;       /* Negro profundo */
--surface: #111827;         /* Gris muy oscuro */
--border: #374151;          /* Gris medio */
```

## 📋 Requisitos Previos

- Node.js 18+
- npm o yarn
- Backend KST Estampados corriendo en puerto 9000

## 🏃‍♂️ Instalación y Configuración

### 1. Clonar el repositorio
```bash
git clone <url-del-repo>
cd kst-estampados-frontend
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
```bash
cp .env.local.example .env.local
```

Editar `.env.local`:
```env
NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
NEXT_PUBLIC_BASE_URL=http://localhost:8000
NEXT_PUBLIC_DEFAULT_REGION=us
REVALIDATE_SECRET=supersecret
```

### 4. Iniciar el servidor de desarrollo
```bash
npm run dev
```

El frontend estará disponible en `http://localhost:8000`

## 🎯 Funcionalidades Implementadas

### ✅ Navegación
- [x] Logo KST personalizado con animaciones
- [x] Menú horizontal responsive
- [x] Iconos SVG personalizados para usuario y carrito
- [x] Efectos hover neón
- [x] Contador de carrito dinámico

### ✅ Páginas Principales
- [x] **Home**: Hero section con gradientes neón, features y CTA
- [x] **Store**: Grid de productos con fondo oscuro
- [x] **Product**: Páginas de detalle de producto
- [x] **Cart**: Carrito de compras funcional
- [x] **Account**: Gestión de usuario

### ✅ Componentes Personalizados
- [x] **Hero Section**: Gradientes y animaciones neón
- [x] **Product Cards**: Fondo oscuro con efectos hover
- [x] **Buttons**: Estilos neón con gradientes
- [x] **Icons**: SVGs personalizados para UX mejorada

## 📦 Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── [countryCode]/     # Rutas dinámicas por país
│   ├── layout.tsx         # Layout principal
│   └── globals.css        # Estilos globales personalizados
├── lib/                   # Utilidades y configuración
│   ├── config.ts         # Configuración de Medusa
│   ├── data/             # Funciones de datos
│   └── util/             # Utilidades helper
├── modules/              # Componentes modulares
│   ├── layout/          # Componentes de layout
│   ├── home/            # Componentes del home
│   ├── products/        # Componentes de productos
│   ├── cart/            # Componentes del carrito
│   └── common/          # Componentes reutilizables
└── styles/              # Archivos de estilos
    └── globals.css      # Estilos personalizados KST
```

## 🎨 Personalización de Estilos

### Tema Neón KST
Los estilos principales están en `src/styles/globals.css`:

```css
/* Gradientes neón */
.btn-kst {
  background: linear-gradient(45deg, #39FF14, #FF0080, #000);
}

/* Sombras neón */
.shadow-neon-lime {
  box-shadow: 0 0 20px rgba(57, 255, 20, 0.5);
}

/* Animaciones */
.animate-neon-pulse {
  animation: neonPulse 2s ease-in-out infinite alternate;
}
```

## 📱 Responsive Design

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Navigation**: Menú adaptativo según dispositivo
- **Grid**: Sistema de grid responsive para productos

## 🚀 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Servidor de producción
- `npm run lint` - Ejecutar ESLint
- `npm run type-check` - Verificar tipos TypeScript

## 🔗 Integración con Backend

### Endpoints Utilizados
- **Products**: `/store/products`
- **Cart**: `/store/carts`
- **Auth**: `/store/auth`
- **Regions**: `/store/regions`

### SDK de Medusa
Configurado en `src/lib/config.ts` para conectar con el backend.

## 🎭 Componentes Destacados

### 1. Hero Section
- Gradientes animados
- Texto con efectos neón
- CTA buttons personalizados

### 2. Product Grid
- Fondo oscuro con bordes neón
- Hover effects
- Responsive layout

### 3. Navigation
- Logo animado
- Iconos SVG custom
- Contador de carrito dinámico

## 👥 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 🆘 Soporte

Para soporte, contacta a: [tu-email@ejemplo.com]

---

**KST Estampados** - E-commerce moderno con diseño neón 🎨✨
  </a>
  <a href="https://discord.gg/xpCwq3Kfn8">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Discord Chat" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=medusajs">
    <img src="https://img.shields.io/twitter/follow/medusajs.svg?label=Follow%20@medusajs" alt="Follow @medusajs" />
  </a>
</p>

### Prerequisites

To use the [Next.js Starter Template](https://medusajs.com/nextjs-commerce/), you should have a Medusa server running locally on port 9000.
For a quick setup, run:

```shell
npx create-medusa-app@latest
```

Check out [create-medusa-app docs](https://docs.medusajs.com/learn/installation) for more details and troubleshooting.

# Overview

The Medusa Next.js Starter is built with:

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Medusa](https://medusajs.com/)

Features include:

- Full ecommerce support:
  - Product Detail Page
  - Product Overview Page
  - Product Collections
  - Cart
  - Checkout with Stripe
  - User Accounts
  - Order Details
- Full Next.js 15 support:
  - App Router
  - Next fetching/caching
  - Server Components
  - Server Actions
  - Streaming
  - Static Pre-Rendering

# Quickstart

### Setting up the environment variables

Navigate into your projects directory and get your environment variables ready:

```shell
cd nextjs-starter-medusa/
mv .env.template .env.local
```

### Install dependencies

Use Yarn to install all dependencies.

```shell
yarn
```

### Start developing

You are now ready to start up your project.

```shell
yarn dev
```

### Open the code and start customizing

Your site is now running at http://localhost:8000!

# Payment integrations

By default this starter supports the following payment integrations

- [Stripe](https://stripe.com/)

To enable the integrations you need to add the following to your `.env.local` file:

```shell
NEXT_PUBLIC_STRIPE_KEY=<your-stripe-public-key>
```

You'll also need to setup the integrations in your Medusa server. See the [Medusa documentation](https://docs.medusajs.com) for more information on how to configure [Stripe](https://docs.medusajs.com/resources/commerce-modules/payment/payment-provider/stripe#main).

# Resources

## Learn more about Medusa

- [Website](https://www.medusajs.com/)
- [GitHub](https://github.com/medusajs)
- [Documentation](https://docs.medusajs.com/)

## Learn more about Next.js

- [Website](https://nextjs.org/)
- [GitHub](https://github.com/vercel/next.js)
- [Documentation](https://nextjs.org/docs)
