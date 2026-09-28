import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' — чтобы сборка одинаково работала и на Vercel, и на GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: './',
});
