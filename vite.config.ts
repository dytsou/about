import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, existsSync, writeFileSync } from 'fs';
import { join } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'github-pages-spa',
      writeBundle() {
        const distPath = join(process.cwd(), 'dist');
        const indexPath = join(distPath, 'index.html');
        const notFoundPath = join(distPath, '404.html');
        const noJekyllPath = join(distPath, '.nojekyll');

        // Copy index.html to 404.html for GitHub Pages SPA routing
        if (existsSync(indexPath)) {
          copyFileSync(indexPath, notFoundPath);
          console.log('✓ Copied index.html to 404.html for GitHub Pages SPA routing');
        } else {
          console.warn('index.html not found, skipping 404.html generation');
        }

        // Create .nojekyll file to disable Jekyll processing on GitHub Pages
        writeFileSync(noJekyllPath, '');
        console.log('✓ Created .nojekyll file to disable Jekyll processing');
      },
    },
  ],
  base: '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
