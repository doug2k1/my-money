'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('Transactions', 'date', {
        allowNull: false,
        type: Sequelize.DATE,
      }),
      queryInterface.changeColumn('BalanceUpdates', 'date', {
        allowNull: false,
        type: Sequelize.DATE,
      }),
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('Transactions', 'date', {
        allowNull: false,
        type: Sequelize.DATEONLY,
      }),
      queryInterface.changeColumn('BalanceUpdates', 'date', {
        allowNull: false,
        type: Sequelize.DATEONLY,
      }),
    ]);
  },
};
