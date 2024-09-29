import react from '@vitejs/plugin-react';
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

const r = path => resolve(__dirname, path);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    appType: 'spa',
    root: '.',
    base: env.VITE_BASE, // repo name for GitHub Actions deployment (optional)
    publicDir: 'public',
    envDir: '.',
    envPrefix: 'VITE_',

    resolve: {
      extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json'],
      // alias: {
      //   '@': r('./src'),
      //   '@pages': r('./src/pages'),
      //   '@components': r('./src/components'),
      //   '@assets': r('./src/assets'),
      //   '@utils': r('./src/utils'),
      //   '@ui': r('./src/ui'),
      //   '@store': r('./src/store'),
      //   '@hooks': r('./src/hooks'),
      //   '@constants': r('./src/constants'),
      //   '@providers': r('./src/providers'),
      // },
    },

    build: {
      outDir: 'dist',
    },

    server: {
      port: 3000,
      strictPort: false,
      open: false,
    },

    preview: {
      port: 8080,
      strictPort: false,
      open: false,
    },

    plugins: [
      react(),

      // Image optimizer
      // The plugin has its own config but we can modify it if we needed, as example is to set more formats
      // https://github.com/FatehAK/vite-plugin-image-optimizer
      ViteImageOptimizer({
        png: {
          quality: 70,
        },
        jpeg: {
          quality: 70,
        },
        jpg: {
          quality: 70,
        },
      }),

      // (optional) To Webp Converter Script.
      // Use only if needed to convert images to webp.
      // How to uninstall: Remove the object below and enter this command into CLI: npm uninstall imagemin imagemin-webp
      // Important! Script is working only on server start (restart)
      {
        ...imagemin(
          ['./public/images/*.{jpg,png,jpeg}'], // path where images are located
          {
            destination: './public/webp', // destination folder of converted images
            plugins: [imageminWebp({ quality: 70 })], // overall conversion quality
          },
        ),
        apply: 'serve',
      },
    ],

    css: {
      preprocessorOptions: {
        scss: {
          // A setting to hide console warning about legacy JS API
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
  };
});
