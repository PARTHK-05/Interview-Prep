import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins:
  [
    tailwindcss(), 
    react()
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://96e7-49-36-99-126.ngrok-free.app',
      }
    }
  }
  
})



