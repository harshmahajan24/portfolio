import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  base: './',
  build: { assetsInlineLimit: process.env.INLINE ? 100000000 : 4096 }
})
