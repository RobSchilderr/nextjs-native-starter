const baseConfig = require('./tailwind.config.base.js')

// if you have multiple apps, they can all share the same app-base config
module.exports = {
  ...baseConfig,
  content: ['./**/*.{js,ts,jsx,tsx}'],
  theme: {
    ...baseConfig.theme,
  },
}
