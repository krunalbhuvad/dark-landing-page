/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
          colors: {
            neon: {
              purple: '#A259FF',
              pink: '#F72585',
              blue: '#3A86FF',
            },
            dark: '#0C0512',
          },
          boxShadow: {
            neon: '0 0 10px #A259FF, 0 0 20px #A259FF',
          },
          fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
          },
        },
      }
      ,
    plugins: [],
}

