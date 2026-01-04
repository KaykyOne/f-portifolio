// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from '@astrojs/react';

const site = 'https://KaykyOne.github.io/f-portifolio';

// https://astro.build/config
export default defineConfig({
  site,

  // nome do repositório
  base: '/f-portifolio',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});