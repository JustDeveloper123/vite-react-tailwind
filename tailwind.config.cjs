/** @type {import('tailwindcss').Config} */

const breakpoints = {
  container: 'var(--container-sum)',
  mobile: 'var(--container-mobile)',
  'mobile-320': '320px',
  'mobile-480': '480px',
  'tablet-640': '640px',
  'tablet-768': '768px',
  'laptop-860': '860px',
  'laptop-1024': '1024px',
  'pc-1280': '1280px',
  'pc-1600': '1600px',
  'pc-1920': '1920px',
};

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        background: 'var(--color-background)',
        text: 'var(--color-text)',
      },
      screens: {
        ...breakpoints,
      },
      width: {
        ...breakpoints,
      },
      maxWidth: {
        ...breakpoints,
      },
      minWidth: {
        ...breakpoints,
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),

    // Adding all tw colors to :root script
    function ({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];
          const cssVariable =
            colorKey === 'DEFAULT'
              ? `-${colorGroup}`
              : `-${colorGroup}-${colorKey}`;

          const newVars =
            typeof value === 'string'
              ? { [cssVariable]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    },
  ],
};
