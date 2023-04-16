module.exports = {
  content: [
    'src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-work-sans)', ...defaultTheme.fontFamily.sans],
        display: ['var(--font-bebas-neue)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
