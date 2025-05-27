/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.tsx",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./web/**/*.{js,jsx,ts,tsx}", // si tienes carpetas específicas para web
    "./**/*.{js,jsx,ts,tsx}"      // o usa esto para cubrir todo
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
