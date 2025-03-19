/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // For app router users
    "./src/**/*.{js,ts,jsx,tsx}", // Include src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};