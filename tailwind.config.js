/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{html,js}", 
    "/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}", 
    "/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {
    extend: {},
  },
  plugins: [],
});
