const Sequelize = require('sequelize');
const secret = require('./secret');

module.exports = {
  test: {
    username: 'postgres',
    database: 'mymoney_ci_test',
    host: '127.0.0.1',
    dialect: 'postgres',
    logging: false,
    operatorsAliases: Sequelize.Op
  }
};
