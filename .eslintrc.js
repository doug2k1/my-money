module.exports = {
  root: true,
  parser: 'babel-eslint',
  plugins: ['node'],
  extends: ['plugin:node/recommended', 'prettier'],
  env: {
    node: true
  },
  rules: {
    'node/no-unpublished-require': 'off'
  }
};
