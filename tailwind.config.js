const path = require("path")

module.exports = {
  darkMode: "class",
  presets: [require("@medusajs/ui-preset")],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@medusajs/ui/dist/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: "width margin",
        height: "height",
        bg: "background-color",
        display: "display opacity",
        visibility: "visibility",
        padding: "padding-top padding-right padding-bottom padding-left",
      },
      colors: {
        // Colores principales basados en el logo KST
        'kst-lime': '#00FF00',     // Verde ácido del logo
        'kst-magenta': '#FF00FF',  // Magenta del logo
        'kst-pink': '#FF1493',     // Rosa vibrante
        'kst-cyan': '#00FFFF',     // Cyan complementario
        
        // Variaciones para diferentes estados
        primary: {
          50: '#f0fff0',
          100: '#dcffdc',
          200: '#bbffbb',
          300: '#86ff86',
          400: '#4aff4a',
          500: '#00FF00',   // kst-lime principal
          600: '#00e600',
          700: '#00b300',
          800: '#008000',
          900: '#006600',
          950: '#003300',
        },
        
        secondary: {
          50: '#fff0ff',
          100: '#ffddff',
          200: '#ffbbff',
          300: '#ff88ff',
          400: '#ff44ff',
          500: '#FF00FF',   // kst-magenta principal
          600: '#e600e6',
          700: '#cc00cc',
          800: '#990099',
          900: '#660066',
          950: '#330033',
        },
        
        accent: {
          50: '#fff5f8',
          100: '#ffe8ee',
          200: '#ffd1dc',
          300: '#ffaab9',
          400: '#ff7390',
          500: '#FF1493',   // kst-pink principal
          600: '#e6127a',
          700: '#cc1068',
          800: '#b30e56',
          900: '#800a3d',
          950: '#4d0626',
        },
        
        // Colores oscuros para el fondo y contraste
        dark: {
          50: '#1a1a1a',
          100: '#2d2d2d',
          200: '#404040',
          300: '#525252',
          400: '#666666',
          500: '#808080',
          600: '#999999',
          700: '#b3b3b3',
          800: '#cccccc',
          900: '#e6e6e6',
          950: '#f3f3f3',
        },
        
        kst: {
          green: '#00FF00',
          'green-dark': '#00CC00',
          magenta: '#FF00FF',
          'magenta-dark': '#CC00CC',
          black: '#000000',
          white: '#FFFFFF',
          'green-50': '#f0fff0',
          'green-100': '#ccffcc',
          'green-500': '#00FF00',
          'green-600': '#00CC00',
          'green-700': '#00AA00',
          'magenta-50': '#fff0ff',
          'magenta-100': '#ffccff',
          'magenta-500': '#FF00FF',
          'magenta-600': '#CC00CC',
          'magenta-700': '#AA00AA',
        },
        
        grey: {
          0: "#FFFFFF",
          5: "#F9FAFB",
          10: "#F3F4F6",
          20: "#E5E7EB",
          30: "#D1D5DB",
          40: "#9CA3AF",
          50: "#6B7280",
          60: "#4B5563",
          70: "#374151",
          80: "#1F2937",
          90: "#111827",
        },
      },
      borderRadius: {
        none: "0px",
        soft: "2px",
        base: "4px",
        rounded: "8px",
        large: "16px",
        circle: "9999px",
      },
      maxWidth: {
        "8xl": "100rem",
      },
      screens: {
        "2xsmall": "320px",
        xsmall: "512px",
        small: "1024px",
        medium: "1280px",
        large: "1440px",
        xlarge: "1680px",
        "2xlarge": "1920px",
      },
      fontSize: {
        "3xl": "2rem",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Ubuntu",
          "sans-serif",
        ],
      },
      keyframes: {
        ring: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-top": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-top": {
          "0%": {
            height: "100%",
          },
          "99%": {
            height: "0",
          },
          "100%": {
            visibility: "hidden",
          },
        },
        "accordion-slide-up": {
          "0%": {
            height: "var(--radix-accordion-content-height)",
            opacity: "1",
          },
          "100%": {
            height: "0",
            opacity: "0",
          },
        },
        "accordion-slide-down": {
          "0%": {
            "min-height": "0",
            "max-height": "0",
            opacity: "0",
          },
          "100%": {
            "min-height": "var(--radix-accordion-content-height)",
            "max-height": "none",
            opacity: "1",
          },
        },
        enter: {
          "0%": { transform: "scale(0.9)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        leave: {
          "0%": { transform: "scale(1)", opacity: 1 },
          "100%": { transform: "scale(0.9)", opacity: 0 },
        },
        "slide-in": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        ring: "ring 2.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
        "fade-in-right":
          "fade-in-right 0.3s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "fade-in-top": "fade-in-top 0.2s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "fade-out-top":
          "fade-out-top 0.2s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "accordion-open":
          "accordion-slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards",
        "accordion-close":
          "accordion-slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards",
        enter: "enter 200ms ease-out",
        "slide-in": "slide-in 1.2s cubic-bezier(.41,.73,.51,1.02)",
        leave: "leave 150ms ease-in forwards",
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite alternate',
        'gradient': 'gradient 6s ease infinite',
      },
      
      boxShadow: {
        'neon-lime': '0 0 20px rgba(0, 255, 0, 0.5)',
        'neon-magenta': '0 0 20px rgba(255, 0, 255, 0.5)',
        'neon-pink': '0 0 20px rgba(255, 20, 147, 0.5)',
      },
      
      keyframes: {
        // ...existing keyframes...
        'neon-pulse': {
          '0%': { 
            boxShadow: '0 0 20px rgba(0, 255, 0, 0.8), 0 0 40px rgba(255, 0, 255, 0.6)' 
          },
          '100%': { 
            boxShadow: '0 0 10px rgba(0, 255, 0, 0.4), 0 0 20px rgba(255, 0, 255, 0.3)' 
          },
        },
        'gradient': {
          '0%, 100%': { 
            backgroundPosition: '0% 50%' 
          },
          '50%': { 
            backgroundPosition: '100% 50%' 
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-radix")(),
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-lg': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
        },
        '.text-shadow-neon-lime': {
          textShadow: '0 0 10px rgba(0, 255, 0, 0.8), 0 0 20px rgba(0, 255, 0, 0.5)',
        },
        '.text-shadow-neon-magenta': {
          textShadow: '0 0 10px rgba(255, 0, 255, 0.8), 0 0 20px rgba(255, 0, 255, 0.5)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
