export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      animation: {
        'rotate': 'rotate-nav 0.3s ease-in-out'
      },
      fontFamily: {
        'noto': ["Noto Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}