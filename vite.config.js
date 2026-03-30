import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.VERCEL
    ? '/'                  // Vercel ke liye
    : '/Mr-Tea-Cafe/',    // GitHub Pages ke liye
})