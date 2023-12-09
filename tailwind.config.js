/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'title': ['Montserrat', 'sans-serif'],
          'para' : ['Playpen Sans', 'cursive']
        },
        keyframes: {
          wiggle: {
            '0%, 100%': { transform: 'rotate(0)' },
            '50%': { transform: 'rotate(3deg)' },
          }
        }
      },
    },
    plugins: [],
  }