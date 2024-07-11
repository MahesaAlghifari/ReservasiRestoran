const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require("tailwindcss/colors");


/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    // enabled: true,
    content: ["public/**/*.html", "src/**/*.js", "src/**/*.jsx"],
  },
  theme: {
    extend: {},
  },
  plugins:
    [
      require('@tailwindcss/aspect-ratio'),
    ],
}
