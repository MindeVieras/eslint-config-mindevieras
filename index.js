module.exports = {
  globals: {
    React: true,
    JSX: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jsdoc'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsdoc/recommended'
  ],
  rules: {
    'jsdoc/tag-lines': 0,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};
