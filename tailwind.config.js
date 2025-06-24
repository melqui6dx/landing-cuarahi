/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        'curahi': {
          'red': '#FF4A1C',
          'orange': '#FF6B1A', 
          'yellow': '#FFB800',
          'navy': '#1E293B',
          'dark': '#0F172A'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [],
  // Configuración específica para Vercel
  important: false,
  corePlugins: {
    preflight: true
  }
}
