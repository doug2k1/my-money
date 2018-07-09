module.exports = {
  root: true,
  parser: 'babel-eslint',
  plugins: ['node'],
  extends: ['eslint:recommended', 'plugin:node/recommended', 'prettier'],
  env: {
    node: true
  },
  rules: {
    'no-console': 'off',
    'node/no-unpublished-require': 'off'
  }
};
