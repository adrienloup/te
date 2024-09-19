import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        short_name: 'te',
        name: 'TE',
        icons: [
          {
            src: '/te/te-192x192.svg',
            type: 'image/svg+xml',
            sizes: '192x192',
          },
          {
            src: '/te/te-256x256.svg',
            type: 'image/svg+xml',
            sizes: '256x256',
          },
          {
            src: '/te/te-384x384.svg',
            type: 'image/svg+xml',
            sizes: '384x384',
          },
          {
            src: '/te/te-512x512.svg',
            type: 'image/svg+xml',
            sizes: '512x512',
          },
        ],
        start_url: '/te/',
        background_color: '#242424',
        display: 'standalone',
        theme_color: '#00c48d',
        description: 'A simple example of React with Atomic design.',
      },
    }),
  ],
  base: '/te',
});
