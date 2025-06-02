import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Ensures Vite detects changes
    },
    hmr: true, // Enables Hot Module Replacement
    port: 5173, // Change if needed
  }
});
