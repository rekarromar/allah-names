/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        brackets: "url(/assets/images/topography.svg)",
      },
      colors: {
        sur: "#011936",
        "sixty-percent": "#2c3e50",
      },
      fontFamily: {
        lexend: ["lexend", "sans-serif"],
        name: ["name", "sans-serif"],
        meaning: ["meaning", "sans-serif"],
        quran: ["quran", "sans-serif"],
      },
      screens: {
        xs: "0px",
        sm: "360px",
      },
    },
  },
  plugins: [],
};
