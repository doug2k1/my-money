const { Investment, BalanceUpdate } = require('../../src/models');

describe('BalanceUpdate', () => {
  describe('attributes', () => {
    it('should have amount and date', async () => {
      const balanceUpdate = await BalanceUpdate.create({
        amount: 1,
        date: '2018-03-15'
      });

      expect(balanceUpdate.get('amount')).toEqual('1.00');
      expect(balanceUpdate.get('date')).toEqual('2018-03-15');
    });
  });

  describe('validations', () => {
    it('should validate amount', async () => {
      const balanceUpdate = BalanceUpdate.build({ date: '2018-03-15' });
      await expect(balanceUpdate.validate()).rejects.toThrow();
    });

    it('should validate date', async () => {
      const balanceUpdate = BalanceUpdate.build({ amount: 1 });
      await expect(balanceUpdate.validate()).rejects.toThrow();
    });
  });

  describe('relations', () => {
    it('should belong to Investment', async () => {
      const balanceUpdate = await BalanceUpdate.create(
        {
          amount: 1,
          date: '2018-03-15',
          Investment: { name: 'Inv' }
        },
        { include: [Investment] }
      );

      expect(balanceUpdate.get('Investment').get('name')).toEqual('Inv');
    });
  });
});
