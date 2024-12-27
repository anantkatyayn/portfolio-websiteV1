/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      keyframes: {
        'random-motion': {
          '0%': { transform: 'translate(0px, 0px)' },
          '25%': { transform: 'translate(10px, -15px)' },
          '50%': { transform: 'translate(-10px, 10px)' },
          '75%': { transform: 'translate(15px, 5px)' },
          '100%': { transform: 'translate(0px, 0px)' },
        },
      },
      animation: {
        'random-motion': 'random-motion 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

