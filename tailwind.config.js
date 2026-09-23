/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FDFBF7',
          100: '#F5F0EB',
          200: '#E8E2DA',
          300: '#D5C9BD',
          400: '#B8A594',
          500: '#9E4730', // Primary Terracotta
          600: '#8B3A26',
          700: '#722E1D',
          800: '#5A2416',
          900: '#421A10',
        },
        sage: {
          50: '#F4F7F5',
          100: '#E3ECE7',
          200: '#C7D9CF',
          300: '#A1BFB1',
          400: '#759F8E',
          500: '#4A6B5D', // Secondary Accent
          600: '#3A5649',
          700: '#2C4237',
          800: '#1F3027',
          900: '#131F18',
        },
        surface: {
          base: '#FDFBF7',
          card: '#FFFFFF',
          muted: '#F5F0EB',
          border: '#E8E2DA',
          hover: '#F0EAE1',
        },
        ink: {
          primary: '#2C2623',
          secondary: '#5C534D',
          muted: '#8C827A',
          border: '#D8D0C7',
        },
        semantic: {
          success: '#386641',
          'success-bg': '#EAF3EC',
          warning: '#D97706',
          'warning-bg': '#FEF3C7',
          danger: '#BC4749',
          'danger-bg': '#FDF2F2',
          info: '#2563EB',
          'info-bg': '#EFF6FF',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(44, 38, 35, 0.05)',
        elevated: '0 10px 30px -4px rgba(44, 38, 35, 0.08)',
        glow: '0 0 25px rgba(158, 71, 48, 0.15)',
      },
      minHeight: {
        touch: '44px',
      },
      minWidth: {
        touch: '44px',
      },
    },
  },
  plugins: [],
};
