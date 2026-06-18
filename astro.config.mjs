import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://restaurant.arkadya.tech',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
