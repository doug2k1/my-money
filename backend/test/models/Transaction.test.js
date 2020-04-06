const { Investment, Transaction } = require('../../src/models');

describe('Transaction', () => {
  describe('attributes', () => {
    it('should have amount and date', async () => {
      const transaction = await Transaction.create({
        amount: 1,
        date: '2018-03-15'
      });

      expect(transaction.get('amount')).toEqual('1.00');
      expect(transaction.get('date')).toEqual('2018-03-15');
    });
  });

  describe('validations', () => {
    it('should validate amount', async () => {
      const transaction = Transaction.build({ date: '2018-03-15' });
      await expect(transaction.validate()).rejects.toThrow();
    });

    it('should validate date', async () => {
      const transaction = Transaction.build({ amount: 1 });
      await expect(transaction.validate()).rejects.toThrow();
    });
  });

  describe('relations', () => {
    it('should belong to Investment', async () => {
      const transaction = await Transaction.create(
        {
          amount: 1,
          date: '2018-03-15',
          Investment: { name: 'Inv' }
        },
        { include: [Investment] }
      );

      expect(transaction.get('Investment').get('name')).toEqual('Inv');
    });
  });
});
