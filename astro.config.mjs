import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://nasalciuc.github.io',
  base: '/vladimir-nasalciuc.com',
  output: 'static',
  outDir: './dist',
  publicDir: './public',
  srcDir: './src',
  compressHTML: true,
  build: {
    assets: '_astro',
    assetsPrefix: undefined
  },
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  }
});