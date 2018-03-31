const { Broker, Investment } = require('../../src/models');

describe('Broker', () => {
  describe('attributes', () => {
    it('should have name', async () => {
      const broker = await Broker.create({ name: 'Foo' });
      expect(broker.get('name')).toEqual('Foo');
    });
  });

  describe('validations', () => {
    it('should validate name', async () => {
      const broker = Broker.build();
      await expect(broker.validate()).rejects.toThrow();
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
      expect(broker.get('Investments')).toHaveLength(2);
    });
  });
});
