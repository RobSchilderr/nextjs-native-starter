module.exports = {
  ...require('config/eslint-next.js'),
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
}
