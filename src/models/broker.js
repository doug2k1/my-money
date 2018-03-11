'use strict';
module.exports = (sequelize, DataTypes) => {
  var Broker = sequelize.define(
    'Broker',
    {
      name: { type: DataTypes.STRING, allowNull: false }
    },
    {}
  );
  Broker.associate = function(models) {
    this.hasMany(models.Investment);
  };
  return Broker;
};
