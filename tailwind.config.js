/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        graphite: '#2E3135',
        cyanAccent: '#00AEEF',
      },
      backgroundImage: {
        vibrant: 'linear-gradient(90deg, #E3007E 0%, #FF7A00 50%, #00AEEF 100%)',
      },
      boxShadow: {
        soft: '0 12px 30px rgba(46, 49, 53, 0.08)',
      },
    },
  },
  plugins: [],
}

