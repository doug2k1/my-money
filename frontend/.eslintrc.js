module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['react-app', 'prettier'],
  plugins: ['@typescript-eslint'],
  rules: {
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
  },
};
