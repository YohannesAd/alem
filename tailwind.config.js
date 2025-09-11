/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6BB5B5', // Soft Teal
          50: '#F0F9F9',
          100: '#E1F3F3',
          200: '#C3E7E7',
          300: '#A5DBDB',
          400: '#87CFCF',
          500: '#6BB5B5',
          600: '#559191',
          700: '#3F6D6D',
          800: '#2A4949',
          900: '#152525'
        },
        secondary: {
          DEFAULT: '#F9F5EF', // Warm Beige
          50: '#FEFCFA',
          100: '#FDF9F5',
          200: '#FBF3EB',
          300: '#F9F5EF',
          400: '#F7F1E3',
          500: '#F5EDD7',
          600: '#F3E9CB',
          700: '#F1E5BF',
          800: '#EFE1B3',
          900: '#EDDDA7'
        },
        accent: {
          DEFAULT: '#7BAE7F', // Calming Green
          50: '#F2F8F2',
          100: '#E5F1E6',
          200: '#CBE3CD',
          300: '#B1D5B4',
          400: '#97C79B',
          500: '#7BAE7F',
          600: '#629B66',
          700: '#49884D',
          800: '#307534',
          900: '#17621B'
        },
        text: {
          DEFAULT: '#333333', // Charcoal Gray
          light: '#666666',
          lighter: '#999999'
        }
      },
      fontFamily: {
        sans: ['Lato', 'Open Sans', 'Poppins', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
}
