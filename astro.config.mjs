// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

const site = 'https://KaykyOne.github.io/f-portifolio'; 

// https://astro.build/config
export default defineConfig({
  site, 
  base: '/f-portifolio/', // nome do repositório
  vite: {
    plugins: [tailwindcss()],
  },
});
