module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryDarkBlue: '#030D28', // Main background
        secondaryDarkBlue: '#0A1A3A', // Section background for contrast
        textWhite: '#FFFFFF', // Text and titles
        buttonBlue: '#58D0F2', // Buttons and interactive elements
        highlightBlue: '#0000FF', // Highlights or call-to-actions
      },
    },
  },
  plugins: [],
};
