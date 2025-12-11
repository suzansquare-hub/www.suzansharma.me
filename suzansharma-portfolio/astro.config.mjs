import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [
    tailwind(),
    mdx(),
  ],
  
  // Static Site Generation (Firebase Hosting-এর জন্য)
  output: 'static',
  
  // Site URL (Sitemap + RSS-এর জন্য)
  site: 'https://drsuzansharma.web.app',
  
  // Markdown/MDX
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true,
    },
  },
  
  // Build output (Firebase hosting এ public হিসেবে serve করবে)
  build: {
    assets: '_astro',
    assetsPrefix: '/_astro/',
  },

  // Image optimization
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },

  // Vite config
  vite: {
    ssr: {
      external: ['firebase/app', 'firebase/firestore'],
    },
  },
});