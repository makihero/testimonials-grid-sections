/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      colors: {
        'moderate-violet': 'hsl(263, 55%, 52%)',
        'moderate-violet-opacity': 'hsl(264.21deg 78.08% 71.37%)',
        'very-dark-grayish-blue': 'hsl(217, 19%, 35%)',
        'very-dark-blackish-blue': 'hsl(219, 29%, 14%)',
        'white': 'hsl(0, 0%, 100%)',

        'light-gray': 'hsl(0, 0%, 81%)',
        'light-gray-t': 'hsl(0, 0%, 60%)',
        'light-grayish-blue': 'hsl(210, 46%, 95%)',
      },

      fontFamily: {
        'barlow': ['Barlow Semi Condensed', 'sans-serif']
      }
    },
  },
  plugins: [],
}