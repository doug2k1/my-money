require('dotenv').config();
const path = require('path');
const express = require('express');
const session = require('express-session');
const ForestAdmin = require('forest-express-sequelize');
const { sequelize } = require('./models');
const setupAuth = require('./setupAuth');
const setupGraphQL = require('./setupGraphQL');

const app = express();

// view engine
app.set('view engine', 'ejs');
app.set('views', './src/views');

// session
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false
  })
);

// Forest Admin
app.use(
  ForestAdmin.init({
    modelsDir: path.resolve('./src/models'),
    envSecret: process.env.FOREST_ENV_SECRET,
    authSecret: process.env.FOREST_AUTH_SECRET,
    sequelize
  })
);

// auth
setupAuth(app);

// graphql
setupGraphQL(app);

// static files
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
  res.render('index', {
    user: req.user
  });
});

// start server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
