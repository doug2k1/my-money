const path = require('path');
const express = require('express');
const { sequelize } = require('./models');

sequelize.authenticate().then(() => {
  console.log('connected to database');
});

const app = express();

// static files
app.use(express.static('public'));

// start server
app.listen(process.env.PORT || 5000);
