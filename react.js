module.exports = {
  extends: './defaults.js',
  plugins: ['react-hooks', 'jsx-a11y'],
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    /**
     * @description rules of eslint-plugin-react-hooks.
     */
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    /**
     * @description rules of eslint-plugin-react.
     */
    'react/prop-types': 'off',
    'react/self-closing-comp': ['error', { html: true }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
