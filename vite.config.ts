import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project sites are served from /<repo-name>/.
// The deploy workflow sets VITE_BASE; local dev falls back to '/'.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
})
