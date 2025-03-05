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
  base: '/', // Ensure correct base path
  build: {
    outDir: 'dist', // Ensures Netlify serves from 'dist'
  },
  server: {
    port: 3000, // Default port (can be changed if needed)
    open: true, // Auto open in browser
  },
});
