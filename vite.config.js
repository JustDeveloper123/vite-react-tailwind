import react from '@vitejs/plugin-react';
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    base: '/vite-react-tailwind/', // назва репозиторію для деплою на GitHub Actions
    envPrefix: 'APP_',

    //# Aliases
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        '@': resolve(__dirname, './src'),
        '@components': resolve(__dirname, './src/components'),
        '@assets': resolve(__dirname, './src/assets'),
        '@utils': resolve(__dirname, './src/utils'),
        '@ui': resolve(__dirname, './src/components/ui'),
        '@store': resolve(__dirname, './src/store'),
        '@hooks': resolve(__dirname, './src/hooks'),
      },
    },

    //# Production
    build: {
      outDir: 'build',
    },

    //# Developer server
    server: {
      port: 3000,
      strictPort: false,
    },
    //# Production server
    preview: {
      port: 8080,
      strictPort: false,
    },

    //# Plugins
    plugins: [
      react(),

      // Оптимізація фото (по бажанню)
      // Плагін має свою готову конфігурацію, ми можемо змінювати налаштування, для різних форматів фото тощо
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

      // Конвертація фото в webp формат при потребі. Якщо не треба то видаляємо скрипт нижче. Не забути видалити непотрібні пакети!
      // Скрипт для конвертації в .webp формат, створює нову папку, по якій можна діставати оброблені картинки
      // Для скрипту потрібно встановити додаткові плагіни: npm install -D imagemin imagemin-webp . Звісно, імпортуємо в конфіг
      {
        ...imagemin(
          ['./public/**/*.{jpg,png,jpeg}'], // шлях до фото для обробки в webp
          {
            destination: './public/webp', // шлях конвертованих фото
            plugins: [imageminWebp({ quality: 70 })], // якість конвертації
          },
        ),
        apply: 'serve',
      },
    ],
  };
});
