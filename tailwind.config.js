/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./views/servicePages/*.ejs","./views/*.ejs"],
    theme: {
      extend: {
        fontFamily:{
          pop:"Pacifico",
          lobster: ['Lobster', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }
  
  