const expect = require('chai').expect;
const { sequelize, Investment, Transaction } = require('../../src/models');

describe('Transaction', () => {
  describe('attributes', () => {
    it('should have amount and date', async () => {
      const transaction = await Transaction.create({
        amount: 1,
        date: '2018-03-15'
      });

      expect(transaction.get('amount')).to.equal('1.00');
      expect(transaction.get('date')).to.equal('2018-03-15');
    });
  });

  describe('validations', () => {
    it('should validate amount', () => {
      const transaction = Transaction.build({ date: '2018-03-15' });
      expect(transaction.validate()).to.be.rejected;
    });

    it('should validate date', () => {
      const transaction = Transaction.build({ amount: 1 });
      expect(transaction.validate()).to.be.rejected;
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

      expect(transaction.get('Investment').get('name')).to.equal('Inv');
    });
  });
});
