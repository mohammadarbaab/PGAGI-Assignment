module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Include all files in the pages directory
    './components/**/*.{js,ts,jsx,tsx}', // Include all files in the components directory
  ],
  theme: {
    extend: {
      // Extend the default theme
      colors: {
        // Add custom colors
        'glass-white': 'rgba(255, 255, 255, 0.9)', // For glassmorphism effect
        'glass-dark': 'rgba(17, 24, 39, 0.9)', // For dark mode glassmorphism
      },
      backdropBlur: {
        // Add custom backdrop blur values
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        // Add custom shadows
        glow: '0 0 20px rgba(59, 130, 246, 0.5)', // Glowing shadow for cards
        'glow-dark': '0 0 20px rgba(99, 102, 241, 0.5)', // Glowing shadow for dark mode
      },
      transitionDuration: {
        // Add custom transition durations
        '500': '500ms',
        '700': '700ms',
      },
      scale: {
        // Add custom scale values
        '105': '1.05',
      },
    },
  },
  plugins: [
    // Add Tailwind plugins if needed
    require('@tailwindcss/forms'), // For form styling (optional)
    require('@tailwindcss/typography'), // For typography (optional)
  ],
};