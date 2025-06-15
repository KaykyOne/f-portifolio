/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <-- ESSENCIAL!
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        test: 'pink', // sua cor custom
      },
    },
  },
  plugins: [],
}
