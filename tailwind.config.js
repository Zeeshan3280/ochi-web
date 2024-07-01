// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dot-eyes': "url('/bg-doteyes.jpg')",
      },
    },
  },
  plugins: [],
};
