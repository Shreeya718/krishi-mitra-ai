/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2E7D32",
        accent: "#FBC02D",
        earth: "#8D6E63",
      },
    },
  },
  plugins: [],
};
