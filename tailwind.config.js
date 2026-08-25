// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        background: {
          50: '#FDFBF7',
          100: '#FBF9F4', // Common background
          200: '#FAF7EF',
          300: '#F7F0EA',
        },
        dark: {
          900: '#090807',
          800: '#0B0A06',
          700: '#0E0D0C',
        },
        accent: {
          light: '#D4A017',
          DEFAULT: '#B45A08',
          transparent: '#B45A0859',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        allura: ['Allura', 'cursive'],
      },
      fontSize: {
        'body-14': ['14px', { lineHeight: '19px', fontWeight: '500' }],
        'body-14.5': ['14.5px', { lineHeight: '23px', fontWeight: '400' }],
        'body-15': ['15px', { lineHeight: '100%', fontWeight: '500' }],
        'body-16': ['16px', { lineHeight: '20px', fontWeight: '500' }],
        'body-16-spaced': ['16px', { lineHeight: '100%', letterSpacing: '1.2px', fontWeight: '600' }],
        'display-medium': ['38px', { lineHeight: '42px', fontWeight: '600' }],
        'display-large': ['78px', { lineHeight: '100%', letterSpacing: '0.02em', fontWeight: '500' }],
        'display-script': ['72px', { lineHeight: '78px', fontWeight: '400' }],
      }
    },
  },
  plugins: [],
}



//spacing scale - 68/5/68