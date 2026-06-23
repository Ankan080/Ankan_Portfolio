/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 25s linear infinite',
      },
      colors: {
        slate: {
          950: '#020617',
        }
      }
    },
  },
  plugins: [],
}