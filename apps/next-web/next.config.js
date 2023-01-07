const withTM = require('next-transpile-modules')(['ui', 'lib'])

const moduleExports = withTM({
  reactStrictMode: true,
})

module.exports = moduleExports
