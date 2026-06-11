import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User/organization site served at the domain root (maximilianouribe.github.io),
// so the base path is '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
