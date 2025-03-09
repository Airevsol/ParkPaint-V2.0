/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#ff3131',
        'brand-blue': '#003756',
        'brand-white': '#ffffff',
        'brand-red-light': '#ffdddd',
        'brand-red-dark': '#e02020',
        'brand-blue-light': '#004e7a',
        'brand-blue-dark': '#002a42',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
} 