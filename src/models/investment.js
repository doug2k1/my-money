'use strict';
module.exports = (sequelize, DataTypes) => {
  var Investment = sequelize.define(
    'Investment',
    {
      name: { type: DataTypes.STRING, allowNull: false }
    },
    {}
  );
  Investment.associate = function(models) {
    this.belongsTo(models.Broker);
    this.hasMany(models.Transaction);
    this.hasMany(models.BalanceUpdate);
  };
  return Investment;
};
