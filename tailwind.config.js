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
          dark: "#1DA1E1 ",
          light: "#1DA1F7"
        },
        gray: {
          dark: "#657786",
          light: "#AABBC2",
          extraLight: "#E1E8ED",
          lightest: "#FSF8FA"
        },
        black: "#14141A"
      }
    },
  },
  plugins: [],
}
