module.exports = {
  testEnvironment: 'node',
  globalSetup: './test/support/setup.js',
  globalTeardown: './test/support/teardown.js',
  collectCoverageFrom: ['src/models/**', '!src/models/index.js']
};
