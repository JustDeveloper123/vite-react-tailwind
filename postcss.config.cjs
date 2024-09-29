module.exports = {
  plugins: [
    require('postcss-sort-media-queries')({
      sort: 'desktop-first', // sort: mobile-first | desktop-first | custom function
    }),
    require('autoprefixer'), // styles support defines in package.json by key "browserslist", the most common value is "cover 99.5%" (supports old browsers)
    require('tailwindcss'),
  ],
};
