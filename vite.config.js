import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({ 
  proxy: {
    server: {
      '/api':'http://localhost:4000'
    }
  },
  plugins: [react()],
})
