const withTM = require('next-transpile-modules')(['ui', 'lib'])

module.exports = withTM({
  reactStrictMode: true,
})
