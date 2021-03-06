module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightTheme: {
          primaryColor: '#202127',
          primaryBackGround: '#f8f9ff',
        },
        darkTheme: {
          primaryColor: '#f8f9ff',
          primaryBackGround: '#202127',
        },
      },
    },
  },
  variants: {
    extend: {
      backdrop: ['hover'],
    },
  },
  plugins: [require('tailwindcss-textshadow')],
}
