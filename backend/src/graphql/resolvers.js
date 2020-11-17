const { GraphQLString } = require('graphql');
const { Op } = require('sequelize');
const {
  Broker,
  Investment,
  BalanceUpdate,
  Transaction,
} = require('../models').models;

module.exports = {
  Query: {
    brokers: (obj, args) => Broker.findAll(args),
    broker: (obj, { id }) => Broker.findByPk(id),
    investments: (obj, args) => Investment.findAll(args),
    investment: (obj, { id }) => Investment.findByPk(id),
  },
  Investment: {
    broker: (obj) => Broker.findOne({ where: { id: obj.BrokerId } }),
    balanceUpdates: (obj, args) =>
      BalanceUpdate.findAll({ where: { InvestmentId: obj.id }, ...args }),
    transactions: (obj) =>
      Transaction.findAll({ where: { InvestmentId: obj.id } }),
    balance: async (obj) => {
      const lastBalanceUpdate = await BalanceUpdate.findOne({
        attributes: ['amount', 'date'],
        where: { InvestmentId: obj.id },
        order: [['date', 'DESC']],
      });

      let balance = 0;
      let startDate = 0;

      if (lastBalanceUpdate) {
        balance = parseFloat(lastBalanceUpdate.amount);
        startDate = lastBalanceUpdate.date;
      }

      const transactionsSum = await Transaction.sum('amount', {
        where: {
          InvestmentId: obj.id,
          date: {
            [Op.gt]: startDate,
          },
        },
      });

      balance += transactionsSum;

      return balance;
    },
    invested: async (obj) => {
      return Transaction.sum('amount', {
        where: {
          InvestmentId: obj.id,
        },
      });
    },
  },
  Broker: {
    investments: (obj) => Investment.findAll({ where: { BrokerId: obj.id } }),
  },
  Date: GraphQLString,
};
