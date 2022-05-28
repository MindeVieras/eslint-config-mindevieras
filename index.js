module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jsdoc'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:jsdoc/recommended',
    // Layer in all the JS Rules
    './.eslintrc.js',
  ],
  rules: {
    'jsdoc/tag-lines': 0,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};
