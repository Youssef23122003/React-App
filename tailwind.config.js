import { space } from 'postcss/lib/list';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors:{
      mainColor:'#1abc9c;',
      darkBlue:'#2c3e50;',
      footerColor:'#1a252f;',
    },spacing:{'38px':'35px'
    }},
  },
  plugins: [],
}