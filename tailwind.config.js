/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      '3xl': { max: '1920px' },
      // => @media (max-width: 1920px) { ... }

      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '768px' },
      // => @media (max-width: 768px) { ... }

      sm: { max: '576px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        primary: '#ff6308',
        sub: '#00ec47',
        comment: '#8E8E8E',
      },
    },
  },
  plugins: [],
};
