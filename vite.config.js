import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import path from 'path';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-react-tailwind/',
  envPrefix: 'APP_',

  // Aliases
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@ui': path.resolve(__dirname, './src/components/ui'),
    },
  },

  // Dev server
  server: {
    port: 3000,
    strictPort: false,
  },
  // Production server
  preview: {
    port: 8080,
    strictPort: false,
  },

  plugins: [
    react(),

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
      // Плагін має свою готову конфігурацію, ми можемо змінювати налаштування, наприклад, для різних форматів (приклад вище)
      // https://github.com/FatehAK/vite-plugin-image-optimizer
    }),

    // (Необов'язково)
    // Скрипт для конвертації в .webp формат, створює нову папку, по якій можна діставати оброблені картинки
    // Для скрипту потрібно встановити додаткові плагіни: npm i -D imagemin imagemin-webp . Звісно, імпортуємо в конфіг
    // {
    //   ...imagemin(
    //     ['./public/**/*.{jpg,png,jpeg}'], // папка з картинками і форматами
    //     {
    //       destination: './public/img/webp/', // папка з обробленими картинками в webp
    //       plugins: [imageminWebp({ quality: 70 })],
    //     },
    //   ),
    //   apply: 'serve',
    // },
    // При використанні цього скрипту, вже не обов'язково використовувати попередню конфігурацію ViteImageOptimizer, можна видалити
  ],
});
