module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html", // Include index.html if needed
  ],
  theme: {
    extend: {
      colors: {
        primaryDarkBlue: '#030D28', // Main background
        secondaryDarkBlue: '#0A1A3A', // Section background for contrast
        textWhite: '#FFFFFF', // Text and titles
        buttonBlue: '#58D0F2', // Buttons and interactive elements
        highlightBlue: '#0000FF', // Highlights or call-to-actions

        // Dark mode palette
        dark: {
          background: '#121212', // General dark mode background
          surface: '#1E1E1E', // Cards, panels, or sections
          textPrimary: '#E0E0E0', // Main text
          textSecondary: '#B0B0B0', // Subtext or less emphasized text
          accent: '#3BB4E6', // Accent color for links, highlights
          error: '#CF6679', // Error state
        },
      },
    },
  },
  plugins: [],
};
