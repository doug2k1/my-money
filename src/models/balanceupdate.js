'use strict';
module.exports = (sequelize, DataTypes) => {
  var BalanceUpdate = sequelize.define(
    'BalanceUpdate',
    {
      amount: { type: DataTypes.DECIMAL(16, 2), allowNull: false },
      date: { type: DataTypes.DATEONLY, allowNull: false }
    },
    {}
  );
  BalanceUpdate.associate = function(models) {
    this.belongsTo(models.Investment);
  };
  return BalanceUpdate;
};
