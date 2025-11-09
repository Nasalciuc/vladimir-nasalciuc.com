import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://vladimir-nasalciuc.com',
  base: '/',
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