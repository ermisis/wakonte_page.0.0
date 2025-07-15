/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        light: "#FFFFFF",
        dimWhite: "#707070",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"]
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
        xxl: "3840px",
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}