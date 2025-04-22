module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  plugins: [],
  env: {
    browser: true,
    es2021: true
  },
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'warn'
  }
}
