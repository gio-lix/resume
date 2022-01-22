module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'kaushan': ['Kaushan Script'],
    },
    extend: {
      colors: {
        dark: {
          DEFAULT: '#010101',
          100: '#00060e',
          200: '#16181d',
          500: '#0f1115',
          700: '#202125',
          900: '#021044',
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
