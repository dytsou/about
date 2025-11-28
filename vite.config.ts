import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, existsSync } from 'fs';
import { join } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404',
      writeBundle() {
        // After build, copy index.html to 404.html for GitHub Pages SPA routing
        const distPath = join(process.cwd(), 'dist');
        const indexPath = join(distPath, 'index.html');
        const notFoundPath = join(distPath, '404.html');

        if (existsSync(indexPath)) {
          copyFileSync(indexPath, notFoundPath);
          console.log('✓ Copied index.html to 404.html for GitHub Pages SPA routing');
        } else {
          console.warn('index.html not found, skipping 404.html generation');
        }
      },
    },
  ],
  base: '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
