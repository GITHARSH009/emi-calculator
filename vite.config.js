import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [],
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ads: ['lucide-react'] // Keep ad-related code separate
        }
      }
    }
  }
})