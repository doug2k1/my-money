require('dotenv').config();
const express = require('express');
const session = require('express-session');
const { createProxyMiddleware } = require('http-proxy-middleware');
const setupAuth = require('./setupAuth');
const setupGraphQL = require('./setupGraphQL');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();

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
  if (req.isAuthenticated()) {
    res.redirect('/app');
  } else {
    res.redirect('/login');
  }
});

// proxy (only for development)
if (process.env.NODE_ENV !== 'production') {
  app.use(
    '/app',
    authMiddleware({ redirect: true }),
    createProxyMiddleware({
      target: 'http://localhost:5001',
      changeOrigin: true,
    })
  );
}

// start server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
