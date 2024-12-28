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
        "elliptical-motion": {
          "0%": { transform: "translate(0%, 0%)" },
          "25%": { transform: "translate(25%, 50%)" },
          "50%": { transform: "translate(50%, 0%)" },
          "75%": { transform: "translate(25%, -50%)" },
          "100%": { transform: "translate(0%, 0%)" },
        },
        floating: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(10px, -10px)" },
          "50%": { transform: "translate(0, -20px)" },
          "75%": { transform: "translate(-10px, -10px)" },
        },
        toastIn: {
          "0%": { opacity: 0, transform: "translateY(-50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        toastOut: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(-50px)" },
        },
      },
      animation: {
       "toast-slide-in-out": "toastIn 1s ease-out, toastOut 1s ease-in forwards",
        "floating-circle": "floating 6s infinite cubic-bezier(0.25, 1, 0.5, 1)",
        "floating-circle-delay": "floating 6s infinite cubic-bezier(0.25, 1, 0.5, 1) 1s",
        'random-motion': 'random-motion 10s ease-in-out infinite',
        "elliptical-motion": "elliptical-motion 10s infinite ease-in-out",
      },
    },
  },
  plugins: [],
}

