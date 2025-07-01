import{fileURLToPath, URL} from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),tailwindcss()],
  resolve:{
    alias:{
      '@components':fileURLToPath(new URL ('.src/components',import.meta.url)),
      '@assets':fileURLToPath(new URL ('.src/components',import.meta.url)),
      "@": path.resolve(__dirname, "./src")
    }
  }
})
