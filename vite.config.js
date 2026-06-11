import { defineConfig } from 'vite';

export default defineConfig({
  // Serve index.html from project root
  root: '.',
  // Dev server config
  server: {
    port: 5173,
    open: true,   // auto-open browser
  },
  // Build output
  build: {
    outDir: 'dist',
  },
});
