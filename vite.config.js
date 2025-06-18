import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'react-icons/fa',
        'react-icons/hi',
        'react-router-dom'
      ],
      output: {
        globals: {
          'react-icons/fa': 'Fa',
          'react-icons/hi': 'Hi',
          'react-router-dom': 'ReactRouterDOM'
        }
      }
    }
  }
})
