/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "bright-orange": "hsl(31, 77%, 52%)",
      "dark-cyan": "hsl(184, 100%, 22%)",
      "very-dark-cyan": "hsl(179, 100%, 13%)",
      white: "#ffff",
      "light-gray": "hsla(0, 0%, 100%, 0.75)",
    },
    screens: {
      xs: "280px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
