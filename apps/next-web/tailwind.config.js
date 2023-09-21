const webBaseConfig = require('../../packages/config/tailwind.config.web.js')

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [webBaseConfig],

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    // in case of using app router too:
    // './src/app/**/*.{js,ts,jsx,tsx}',
  ],
}
