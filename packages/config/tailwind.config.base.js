const defaultTheme = require('tailwindcss/defaultTheme')

// the base config is used by all apps and web-apps

module.exports = {
  content: [],
  theme: {
    extend: {
      sans: ['var(--font-montserrat)', ...defaultTheme.fontFamily.sans],
      display: ['var(--font-bebas-neue)', ...defaultTheme.fontFamily.sans],
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
