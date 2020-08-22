const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  var Transaction = sequelize.define(
    'Transaction',
    {
      amount: { type: DataTypes.DECIMAL(16, 2), allowNull: false },
      date: { type: DataTypes.DATEONLY, allowNull: false },
    },
    {}
  );
  Transaction.associate = function (models) {
    this.belongsTo(models.Investment);
  };
  return Transaction;
};
