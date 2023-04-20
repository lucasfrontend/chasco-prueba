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
      'red': '#ff0000',
      'green': '#1aa385',
      'blue': '#000080',
      'blue-cards': '#10122b',
      'blue-light': '#10122b5c',
      'bg-blue-light2': '#10122b9c',

      'verdechasco': '#135a01',
      'amarillochasco': '#d4d43c',
      'celestef': '20f9d4',
      'blanco-transp': '#FFFFFF90',
      
      'gr-chasco': '#135a09',
      'red-chasco': '#c3060f',
      'bl-chasco': 'rgba(1,1,1,255)',
      'ye-chasco': '#E9D450',
      'bg-card-form': '#ececec',
      'or-chasco': '#fbb351'
    },
    extend: {},
  },
  plugins: [],
}