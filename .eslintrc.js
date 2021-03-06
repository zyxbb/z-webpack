module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'import/order': 'warn',
    'no-use-before-define': 0,
    indent: ['off', 2],
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/indent': ['error', 2]
  }
}
