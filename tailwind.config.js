/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-custom': '#060606',
      },
      height: {
        '18': '4.5rem',
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        'lg': '2rem',
      },
    }
  },
  plugins: [],
}