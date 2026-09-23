import { defineConfig } from 'vite';
import { readdirSync, copyFileSync, cpSync } from 'node:fs';
import { resolve } from 'node:path';

const pages = ['index', 'mobile', 'podcast', 'tour', 'shop', 'contact', 'preview'];
export default defineConfig({
  root: '.',
  base: './',
  server: { open: '/index.html' },
  build: {
    outDir: 'dist',
    rollupOptions: { input: Object.fromEntries(pages.map(page => [page, resolve(`${page}.html`)])) },
  },
  plugins: [{
    name: 'shared-site-assets',
    closeBundle() {
      // Classic shared scripts and their runtime image URLs retain stable paths.
      for (const name of readdirSync('.')) {
        if (/\.(png|jpe?g|webp|svg)$/i.test(name) || ['mobile-navigation.js', 'site-continuity.js', 'site-polish.js', 'site-polish.css'].includes(name)) {
          copyFileSync(name, resolve('dist', name));
        }
      }
      cpSync('assets', 'dist/assets', { recursive: true });
    },
  }],
});
