import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/RIDE-SHARE/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'RideShare SA',
        short_name: 'RideShare',
        description: 'South Africa\'s premier peer-to-peer vehicle rental platform',
        theme_color: '#1e40af',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        scope: './',
        start_url: './',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5MB limit
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\./,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 // 24 hours
              }
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 200,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
              }
            }
          },
          {
            urlPattern: /\.(?:js|css)$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'static-resources-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 7 // 7 days
              }
            }
          }
        ]
      }
    })
  ],
  css: {
    postcss: './postcss.config.js',
  },
  server: {
    port: 3000,
    host: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React chunks
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor';
          }
          // Router chunk
          if (id.includes('react-router')) {
            return 'router';
          }
          // Firebase chunk
          if (id.includes('firebase')) {
            return 'firebase';
          }
          // UI libraries
          if (id.includes('framer-motion') || id.includes('react-hot-toast')) {
            return 'ui-libs';
          }
          // Query and state management
          if (id.includes('@tanstack/react-query')) {
            return 'query';
          }
          // Utility libraries
          if (id.includes('axios') || id.includes('clsx') || id.includes('tailwind-merge')) {
            return 'utils';
          }
          // Large components (dashboard, admin)
          if (id.includes('pages/AdminDashboard') || id.includes('pages/RealTimeAdminDashboard')) {
            return 'admin-pages';
          }
          if (id.includes('pages/HostDashboard') || id.includes('pages/RenterDashboard')) {
            return 'dashboard-pages';
          }
          // Default chunk for other modules
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2
      },
      mangle: {
        safari10: true
      }
    },
    chunkSizeWarningLimit: 1000,
    target: 'esnext',
    cssCodeSplit: true,
    sourcemap: false
  },
  esbuild: {
    target: 'esnext'
  },
  define: {
    global: 'globalThis',
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      '@tanstack/react-query',
      'framer-motion',
      'axios',
      'clsx',
      'tailwind-merge'
    ],
    exclude: ['firebase']
  },
  // Performance optimizations
  experimental: {
    renderBuiltUrl(filename: string) {
      return `./${filename}`;
    }
  }
});
