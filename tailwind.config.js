/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "#05161E",
        contrast: "#1b2a33",
        aux: "#39A936",
      },
      fontFamily: {
        display: ["Comfortaa"],
        body: ["Open Sans"],
      },
    },
  },
  plugins: [],
}
