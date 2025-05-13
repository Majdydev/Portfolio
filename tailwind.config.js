/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
        secondary: "#112240",
        accent: "#64ffda",
        textPrimary: "#ccd6f6",
        textSecondary: "#8892b0",
      },
    },
  },
  plugins: [],
};
