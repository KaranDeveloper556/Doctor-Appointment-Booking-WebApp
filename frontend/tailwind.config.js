/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#000000',
          background: '#000000',
          text: '#fff',
          border: '#fff'
        },
        light: {
          primary: '#000000',
          background: '#ffffff',
          text: '#000',
          border: '#000000'
        },
        light_blue: {
          primary: '#1a202c',
          background: '#AEDEE0',
          text: '#000',
          border: '#000000'
        },
        light_orange: {
          primary: '#b58900',
          background: '#EF9D71',
          text: '#000000',
          border: "#000000"
        },
      },
      fontFamily: {
        'KobinW': ['KorbinW0', 'system-ui'],
        'Jagerlay': ['Jagerlay', 'system-ui'],
      },
      screens: {
        'li': '350px',
        'vsm': '480px',
        'mdLg': '830px',
        '3xl': '1680px',
        '4xl': '2800px'
      },
      backgroundImage: {
        'text-bg': "url('https://i.pinimg.com/736x/f6/de/eb/f6deeb73c59af4aa4c78799a427e52fa.jpg')",
      }
    },
  },
  plugins: [],
}