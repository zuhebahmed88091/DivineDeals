/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {colors: {
      'custom-pink': '#fde1ff',
      'custom-green': 'rgba(225, 255, 234, 0.133)', 
    },
    backgroundImage: {
      'hero-gradient': 'linear-gradient(180deg, #fde1ff, rgba(225, 255, 234, 0.133) 66%)',
    }},
  },
  plugins: [],
}

