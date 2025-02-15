module.exports = {
  plugins: [
    require('@tailwindcss/postcss'), // Use the new postcss plugin
    require('autoprefixer'),  // You can also keep other PostCSS plugins if you are using them
  ],
}
