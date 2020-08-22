const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/database.js')[env];
let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

const modelDefiners = [
  require('./BalanceUpdate'),
  require('./Broker'),
  require('./Investment'),
  require('./Transaction'),
];

// We define all models according to their files.
modelDefiners.forEach((modelDefiner) => modelDefiner(sequelize));

// We execute any extra setup after the models are defined, such as adding associations.
Object.values(sequelize.models).forEach((model) => {
  if (model.associate) {
    model.associate(sequelize.models);
  }
});

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;
