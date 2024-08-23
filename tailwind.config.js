/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', "./src/**/*.{vue,html,js}"],
  theme: {
    extend: {
      colors:{
        'darked-blue':"#00424D",
        'blue-text':'#14C9C9',
        'aqua':"#14C9C9",
        'aqua-color':"#14C9C9",
        'aqua-color-hover':"#00424D",
        'card-hover':'-translate-y-2',
        'card-hover-shadow':"shadow-xl",
        'dark-color':"#23272F",
        'gray-color':"#98A2B3"
      }
    },
  },
  plugins: [],
}

