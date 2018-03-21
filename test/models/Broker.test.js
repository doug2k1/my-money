const expect = require('chai').expect;
const { sequelize, Broker, Investment } = require('../../src/models');

describe('Broker', () => {
  describe('attributes', () => {
    it('should have name', async () => {
      const broker = await Broker.create({ name: 'Foo' });
      expect(broker.get('name')).to.equal('Foo');
    });
  });

  describe('validations', () => {
    it('should validate name', () => {
      const broker = Broker.build();
      expect(broker.validate()).to.be.rejected;
    });
  });

  describe('relations', () => {
    it('should have many investments', async () => {
      const broker = await Broker.create(
        {
          name: 'Foo',
          Investments: [{ name: 'A' }, { name: 'B' }]
        },
        { include: [Investment] }
      );
      expect(broker.get('Investments')).to.have.length(2);
    });
  });
});
