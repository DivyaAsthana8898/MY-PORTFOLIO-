/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        // automatically add extra spacing values if needed
        '80': '20rem',  // already exists, just example
        '2': '0.5rem',  // mx-2, my-2
        '5': '1.25rem', // gap-5
      },
      width: {
        '80': '20rem',  // w-80
      },
      height: {
        'auto': 'auto', // h-auto
      },
      gap: {
        '5': '1.25rem',
      },
    },
  },
  plugins: [],
};

