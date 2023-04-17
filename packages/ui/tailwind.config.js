const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      sans: ['var(--font-montserrat)', ...defaultTheme.fontFamily.sans],
    },
  },

  plugins: [],
}
