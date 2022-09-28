/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          base: "#1DA1F2",
          dark: "#0e9af1",
          light: "#cfebfc"
        },
        gray: {
          dark: "#657786",
          light: "#AABBC2",
          extraLight: "#E1E8ED",
          lightest: "#E1E8ED"
        },
        black: "#14141A"
      }
    },
  },
  plugins: [],
}
