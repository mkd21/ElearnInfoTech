import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0', // Allow access from other devices
    port: 5173,      // Optional: Specify a custom port
  },
});