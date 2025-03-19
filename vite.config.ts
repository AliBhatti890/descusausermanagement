import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4100,
    proxy: {
      '/api': {
        target: 'http://13.48.40.80:5000', // Backend server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove '/api' from the path
      },
    },
  },
  preview: {
    port: 4100,
  },
});
