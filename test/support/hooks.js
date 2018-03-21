const { sequelize } = require('../../src/models');

beforeEach(async () => {
  await sequelize.sync({ force: true });
});

after(() => {
  sequelize.close();
});
