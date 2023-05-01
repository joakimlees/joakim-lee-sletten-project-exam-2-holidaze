/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      headings: ["Ubuntu"],
      buttons: ["Prompt"],
      paragraph: ["'Open Sans'"],
    },
    extend: {
      colors: {
        primary: "#02635D",
        secondary: "#A80035",
        alternative: "#5C00A8",
        light: "#F5F8FF",
        dark: "#363332",
      },
    },
  },
  plugins: [],
};
