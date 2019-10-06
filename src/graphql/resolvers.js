const { GraphQLString } = require('graphql');
const { Broker, Investment, BalanceUpdate, Transaction } = require('../models');

module.exports = {
  Query: {
    brokers: (obj, args) => Broker.findAll(args),
    broker: (obj, { id }) => Broker.findByPk(id),
    investments: (obj, args) => Investment.findAll(args),
    investment: (obj, { id }) => Investment.findByPk(id)
  },
  Investment: {
    broker: obj => Broker.findOne({ where: { id: obj.BrokerId } }),
    balanceUpdates: (obj, args) =>
      BalanceUpdate.findAll({ where: { InvestmentId: obj.id }, ...args }),
    transactions: obj => Transaction.all({ where: { InvestmentId: obj.id } })
  },
  Broker: {
    investments: obj => Investment.findAll({ where: { BrokerId: obj.id } })
  },
  Date: GraphQLString
};
