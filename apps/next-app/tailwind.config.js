const appBaseConfig = require('../../packages/config/tailwind.config.app.js')

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [appBaseConfig],

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    // in case of using app router too:
    // './src/app/**/*.{js,ts,jsx,tsx}',
  ],
}
