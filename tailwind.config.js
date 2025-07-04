/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        'cuarahi': {
          // Primary colors - Red family
          'red': {
            DEFAULT: '#DC2626',
            'light': '#EF4444',
            'dark': '#B91C1C',
            'accent': '#F87171'
          },
          // Secondary colors - Blue family
          'blue': {
            DEFAULT: '#1E40AF',
            'light': '#3B82F6',
            'dark': '#1E3A8A',
            'accent': '#60A5FA'
          },
          // Supporting colors - Harmony
          'cyan': {
            DEFAULT: '#0EA5E9',
            'light': '#38BDF8',
            'dark': '#0284C7'
          },
          'indigo': {
            DEFAULT: '#6366F1',
            'light': '#818CF8',
            'dark': '#4F46E5'
          },
          'purple': {
            DEFAULT: '#8B5CF6',
            'light': '#A78BFA',
            'dark': '#7C3AED'
          },
          // Neutral colors
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
