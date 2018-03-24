const ForestAdmin = require('forest-express-sequelize');

ForestAdmin.collection('Investment', {
  fields: [
    {
      field: 'fullName',
      type: 'String',
      get(object) {
        return `${object.name} (${object.Broker.name})`;
      }
    }
  ]
});
