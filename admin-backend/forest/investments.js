const { collection } = require('forest-express-sequelize');
const models = require('../models/');

// This file allows you to add to your Forest UI:
// - Smart actions: https://docs.forestadmin.com/documentation/reference-guide/actions/create-and-manage-smart-actions
// - Smart fields: https://docs.forestadmin.com/documentation/reference-guide/fields/create-and-manage-smart-fields
// - Smart relationships: https://docs.forestadmin.com/documentation/reference-guide/relationships/create-a-smart-relationship
// - Smart segments: https://docs.forestadmin.com/documentation/reference-guide/segments/smart-segments
collection('investments', {
  actions: [],
  fields: [{
    field: 'fullName',
    type: 'String',
    get: (investment) => {
      return models.brokers.findOne({ where: { id: investment.brokerIdKey } })
        .then(broker => {
          return `${investment.name} (${broker.name})`;
        })
    }
  }],
  segments: [],
});
