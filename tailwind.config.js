/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-lime': '#BFFF47',
        'deep-black': '#050505',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(191, 255, 71, 0.1) 0%, rgba(191, 255, 71, 0.05) 100%)',
      },
    },
  },
  plugins: [],
};
