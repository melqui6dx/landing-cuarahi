// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      // Aplicar base styles de Tailwind
      applyBaseStyles: true, // Permitir que Tailwind aplique sus estilos base
      // Configuración específica para producción
      configFile: './tailwind.config.js'
    })
  ],
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true },
    imageService: true
  }),
  // Configuración para asegurar que CSS se procese correctamente
  vite: {
    css: {
      preprocessorOptions: {
        css: {
          charset: false
        }
      }
    }
  }
});
