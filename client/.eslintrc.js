module.exports = {
  extends: ['react-app'],
  rules: {
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true
      }
    ]
  }
};
