/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "xs": "475px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      headings: ["Ubuntu"],
      buttons: ["Prompt"],
      paragraph: ["'Open Sans'"],
    },
    fontSize: {
      //12px
      xs: ["0.75rem", "1.1rem"],
      //16px
      sm: ["1rem", "1.5rem"],
      //21px
      base: ["1.3rem", "1.9rem"],
      //28px
      xl: ["1.75rem", "2.6rem"],
      //37px
      "2xl": ["2.3rem", "3.4rem"],
      //50px
      "3xl": ["3.1rem", "4.6rem"],
      //67px
      "4xl": ["4.1rem", "6.2rem"],
      //89px
      "5xl": ["5.5rem", "8.2rem"],
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
