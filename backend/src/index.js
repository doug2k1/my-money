require('dotenv').config();
const express = require('express');
const session = require('express-session');
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
    saveUninitialized: false,
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
    user: req.user,
  });
});

// start server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
