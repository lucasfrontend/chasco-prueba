/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
        colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'darki': '#252954',
      'light': '#9b9ca7',
      'maincl': '#0e0e23',
      'sdch': '#bebec4',
      'white': '#ffff',
      'dark': '#01081f',
      'active': '#4255d4',
      'oscuro': '#212529',
      
      'green': '#1DB954',
      'dark': '#121212',
      'light': '#282828',
      'lightest': '#838383',
      'darkest': '#191414',
      'black': '#000000',

      'header-tandas': '#EEE',
      'red': '#ff000035',
      'green': '#1aa385',
      'blue': '#3e4ec2',
      'blue-cards': '#10122b',
      'blue-light': '#10122b5c',

      'verdechasco': '#006732',
      'azulchasco': '',
      'rojochasco': ''
    },
    extend: {},
  },
  plugins: [],
}
