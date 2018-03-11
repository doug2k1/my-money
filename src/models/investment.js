'use strict';
module.exports = (sequelize, DataTypes) => {
  var Investment = sequelize.define(
    'Investment',
    {
      name: DataTypes.STRING
    },
    {}
  );
  Investment.associate = function(models) {
    this.belongsTo(models.Broker);
  };
  return Investment;
};
