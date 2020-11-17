const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  var BalanceUpdate = sequelize.define(
    'BalanceUpdate',
    {
      amount: { type: DataTypes.DECIMAL(16, 2), allowNull: false },
      date: { type: DataTypes.DATE, allowNull: false },
    },
    {}
  );
  BalanceUpdate.associate = function (models) {
    this.belongsTo(models.Investment);
  };
  return BalanceUpdate;
};
