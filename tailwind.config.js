/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
        '16/10': '16 / 10',
        '16/9': '16 / 9',
      },
    },
  },
  plugins: [],
  corePlugins: {
  },
}