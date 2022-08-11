/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fed7aa",
        secondary: "#312e81",
        textLight: "black",
        textDark: "white",
      },
    },
  },
  plugins: [],
};
