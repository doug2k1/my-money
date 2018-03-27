const { GraphQLString } = require('graphql');
const { Broker, Investment, BalanceUpdate, Transaction } = require('../models');

module.exports = {
  Query: {
    brokers: (obj, args) => Broker.all(args),
    broker: (obj, { id }) => Broker.findById(id),
    investments: (obj, args) => Investment.all(args),
    investment: (obj, { id }) => Investment.findById(id)
  },
  Investment: {
    broker: obj => Broker.findOne({ where: { id: obj.BrokerId } }),
    balanceUpdates: (obj, args) =>
      BalanceUpdate.all({ where: { InvestmentId: obj.id }, ...args }),
    transactions: obj => Transaction.all({ where: { InvestmentId: obj.id } })
  },
  Broker: {
    investments: obj => Investment.findAll({ where: { BrokerId: obj.id } })
  },
  Date: GraphQLString
};
