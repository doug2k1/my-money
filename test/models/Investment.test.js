const {
  Broker,
  Investment,
  Transaction,
  BalanceUpdate
} = require('../../src/models');

describe('Investment', () => {
  describe('attributes', () => {
    it('should have name', async () => {
      const investment = await Investment.create({ name: 'Foo' });
      expect(investment.get('name')).toEqual('Foo');
    });
  });

  describe('validations', () => {
    it('should validate name', async () => {
      const investment = Investment.build();
      await expect(investment.validate()).rejects.toThrow();
    });
  });

  describe('relations', () => {
    it('should belong to Broker', async () => {
      const investment = await Investment.create(
        {
          name: 'Foo',
          Broker: { name: 'Broker 1' }
        },
        { include: [Broker] }
      );

      expect(investment.get('Broker').get('name')).toEqual('Broker 1');
    });

    it('should have many Transactions', async () => {
      const investment = await Investment.create(
        {
          name: 'Foo',
          Transactions: [
            { amount: 1, date: '2018-01-01' },
            { amount: 2, date: '2018-01-02' }
          ]
        },
        { include: [Transaction] }
      );

      expect(investment.get('Transactions')).toHaveLength(2);
    });

    it('should have many Balance Updates', async () => {
      const investment = await Investment.create(
        {
          name: 'Foo',
          BalanceUpdates: [
            { amount: 1, date: '2018-01-01' },
            { amount: 2, date: '2018-01-02' }
          ]
        },
        { include: [BalanceUpdate] }
      );

      expect(investment.get('BalanceUpdates')).toHaveLength(2);
    });
  });
});
