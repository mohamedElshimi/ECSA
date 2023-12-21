/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-1': '#c50227',
        'primary-2': '#980a25',
        'primary-3': '#78091e',
        'secondry-1': '#202052',
        'secondry-2': '#1c1b3b',
      },
    },
  },
  plugins: [],
}