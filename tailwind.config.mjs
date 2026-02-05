/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0b1220',
          800: '#111a2b',
          700: '#1a2740'
        },
        cyan: {
          400: '#3fd0ff',
          500: '#1db7f2'
        },
        slate: {
          50: '#f7f9fc',
          100: '#eef2f7',
          200: '#d8e0ea',
          600: '#4b5b75'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 40px rgba(10, 25, 54, 0.12)'
      }
    }
  },
  plugins: []
};
