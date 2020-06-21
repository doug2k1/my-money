// This model was generated by Lumber. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const BalanceUpdates = sequelize.define('balanceUpdates', {
    amount: {
      type: DataTypes.DOUBLE,
    },
    date: {
      type: DataTypes.DATE,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'BalanceUpdates',
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  BalanceUpdates.associate = (models) => {
    BalanceUpdates.belongsTo(models.investments, {
      foreignKey: {
        name: 'investmentIdKey',
        field: 'InvestmentId',
      },
      as: 'investment',
    });
  };

  return BalanceUpdates;
};