/* eslint node/no-missing-require: "off" */
const path = require('path');
const express = require('express');
const ForestAdmin = require('forest-express-sequelize');
const { sequelize } = require('./models');
const secret = require('../config/secret');

const app = express();

// Forest Admin
app.use(
  ForestAdmin.init({
    modelsDir: path.resolve('./src/models'),
    envSecret: secret.FOREST_ENV_SECRET,
    authSecret: secret.FOREST_AUTH_SECRET,
    sequelize
  })
);

// static files
app.use(express.static('public'));

// start server
app.listen(process.env.PORT || 5000);
