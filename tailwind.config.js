/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./public/**/*.{html,js}`],
  theme: {
    container:{
      center: true,
      padding: '16px',
      },

    extend: {
      colors: {
        primarytext: '#001858',
        secondarytext: '#172c66',
        tertiarytext: '#f582ae',
        buttontext: '#001858',
        ciamiktext:'#fef6e4',
        buttonbg: '#f582ae',
        hover: '#f582ae',
        bgprimary: '#fef6e4',
        bgsecondary: '#f3d2c1',
        bgciamik:'#001858',
        stroke:'#001858'
      },
      screens:{
        '2xl':'1320px',
      },
    },
  },
  plugins: [],
}

