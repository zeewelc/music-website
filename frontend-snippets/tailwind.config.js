/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}"
  ],
  theme: {
    extend: {
      fontFamily: {
        // Use CSS variables for flexibility and consistency
        sans: ['var(--ff-default)'],
        title: ['var(--ff-title)'],
      },
    },
  },
  plugins: [],
};
