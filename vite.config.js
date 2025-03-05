import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist', // Ensures Netlify serves from 'dist'
  },
  server: {
    port: 3000, // Optional: Change port if needed
    open: true, // Automatically open in browser
  },
});
