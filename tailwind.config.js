const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Control dark pseudo-selector by ancestor's "dark" class
  darkMode: "class",
  // Scan these files for Tailwind classes
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // Necessary color utilities
      transparent: colors.transparent,
      current: colors.current,
      // Primary accent color
      primary: colors.blue,
      // Grayscale
      gray: colors.zinc,
      // Gradient colors
      neon: {
        blue: "#4354d2",
        pink: colors.pink[500],
        purple: colors.purple[500],
        teal: colors.teal[400],
        green: colors.green[500],
        sky: colors.sky[500],
        amber: "#c35c16",
        pink: "#db93ab",
        red: colors.red[500],
      },
      "custom-light": "#ececd4",
      "custom-light-lighter": "#f0f0e9",
    },
    extend: {
      fontFamily: {
        sans: ["Avenir Next", "Helvetica Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
