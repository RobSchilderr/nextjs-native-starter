const baseConfig = require('./tailwind.config.base.js')

// if you have multiple web-apps, they can all share the web-base config
module.exports = {
  ...baseConfig,
  content: ['./**/*.{js,ts,jsx,tsx}'],
  theme: {
    ...baseConfig.theme,
  },
}
