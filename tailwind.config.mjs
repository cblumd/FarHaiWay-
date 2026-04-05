/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'ocean-teal': '#006994',
        'sand': '#F4E4BC',
        'ocean-foam': '#E0F7FA',
      },
    },
  },
  plugins: [],
};