/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'light-sweep': {
          '0%': { left: '-10%' },
          '100%': { left: '110%' },
        },
      },

      animation: {
        'light-sweep': 'light-sweep 2s linear infinite',
      },
      
    },
  },
  plugins: [],
}

