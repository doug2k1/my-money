const expect = require('chai').expect;
const { sequelize, Investment, BalanceUpdate } = require('../../src/models');

describe('BalanceUpdate', () => {
  describe('attributes', () => {
    it('should have amount and date', async () => {
      const balanceUpdate = await BalanceUpdate.create({
        amount: 1,
        date: '2018-03-15'
      });

      expect(balanceUpdate.get('amount')).to.equal('1.00');
      expect(balanceUpdate.get('date')).to.equal('2018-03-15');
    });
  });

  describe('validations', () => {
    it('should validate amount', () => {
      const balanceUpdate = BalanceUpdate.build({ date: '2018-03-15' });
      expect(balanceUpdate.validate()).to.be.rejected;
    });

    it('should validate date', () => {
      const balanceUpdate = BalanceUpdate.build({ amount: 1 });
      expect(balanceUpdate.validate()).to.be.rejected;
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

      expect(balanceUpdate.get('Investment').get('name')).to.equal('Inv');
    });
  });
});
