// const { redirect } = require('next/dist/server/api-utils');

// module.exports = {
//   darkMode: 'class', // Enable class-based dark mode
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx}', // Include all files in the pages directory
//     './components/**/*.{js,ts,jsx,tsx}', // Include all files in the components directory
//   ],
//   theme: {
//     extend: {
//       // Extend the default theme
//       colors: {
//         primary:"#090b0e",
//         secondary:"#1b1c21",
//         textColor:"#646464"
//       },
//       backdropBlur: {
//         // Add custom backdrop blur values
//         xs: '2px',
//         sm: '4px',
//         md: '8px',
//         lg: '12px',
//         xl: '16px',
//       },
//       boxShadow: {
//         // Add custom shadows
//         glow: '0 0 20px rgba(59, 130, 246, 0.5)', // Glowing shadow for cards
//         'glow-dark': '0 0 20px rgba(99, 102, 241, 0.5)', // Glowing shadow for dark mode
//       },
//       transitionDuration: {
//         // Add custom transition durations
//         '500': '500ms',
//         '700': '700ms',
//       },
//       scale: {
//         // Add custom scale values
//         '105': '1.05',
//       },
//     },
//   },
//   plugins: [
//     // Add Tailwind plugins if needed
//     require('@tailwindcss/forms'), // For form styling (optional)
//     require('@tailwindcss/typography'), // For typography (optional)
//   ],
//   redirect(){
//     return[
//       {
//         source:"/",
//         destination:"/discover/now_playing",
//         permanent:true
//       }
//     ]
//   }
// };


module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Include all files in the pages directory
    './components/**/*.{js,ts,jsx,tsx}', // Include all files in the components directory
  ],
  theme: {
    extend: {
      colors: {
        primary: "#090b0e",
        secondary: "#1b1c21",
        textColor: "#646464",
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        glow: '0 0 20px rgba(59, 130, 246, 0.5)', // Glowing shadow for cards
        'glow-dark': '0 0 20px rgba(99, 102, 241, 0.5)', // Glowing shadow for dark mode
      },
      transitionDuration: {
        '500': '500ms',
        '700': '700ms',
      },
      scale: {
        '105': '1.05',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
