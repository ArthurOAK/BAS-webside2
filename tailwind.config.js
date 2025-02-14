/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'Noto Sans Thai'],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        background: '#191A19',
        foreground: '#070707',
        primary: {
          50: '#f4faf3',
          100: '#e5f4e4',
          200: '#cbe8ca',
          300: '#a1d5a0',
          400: '#6eba6e',
          500: '#4a9d4a',
          600: '#3c883c',
          700: '#2f6630',
          800: '#29522a',
          900: '#234424',
          950: '#0f2410',
        },
      },
    },
  },
  plugins: [],
}
