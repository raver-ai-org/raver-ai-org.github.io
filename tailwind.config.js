/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        backgroundImage: {
          'gradient-radial':
            'radial-gradient(38.27% 73.32% at 45.54% 51.88%, var(--tw-gradient-stops))',
        },
      },
    },
  },
  plugins: [],
}
