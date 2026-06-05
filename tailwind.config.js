/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#CC0000',
          dark: '#990000',
          light: '#FF3333',
          gray: '#F5F5F5',
        },
        whatsapp: '#25D366',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
