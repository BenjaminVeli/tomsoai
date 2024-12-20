/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-custom': '#060606',
        'gray-icons': '#676767',
        'gray-dark': '#0d0c0d',
        'green-neon': 'rgb(16 163 127)',
        'greenh-neon': 'rgb(20 200 156)',
        'greenbg-neon': 'rgb(16 163 127)',
      },
      height: {
        '18': '4.5rem',
        '100': '25rem',
        '105': '26.25rem',
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