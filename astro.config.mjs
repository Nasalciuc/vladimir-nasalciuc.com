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
  trailingSlash: 'ignore',
  build: {
    assets: '_astro',
    assetsPrefix: undefined,
    format: 'directory' // CRUCIAL: generează /about/index.html în loc de /about.html
  },
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  }
});