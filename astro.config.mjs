// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://agents-ia-mf.github.io',
  base: '/restaurant-landing',
  vite: {
    plugins: [tailwindcss()]
  }
});