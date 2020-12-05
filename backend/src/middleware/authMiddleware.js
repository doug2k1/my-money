const authMiddleware = (options) => (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  if (options && options.redirect) {
    res.redirect('/');
  }

  res.status(401).send();
};

module.exports = authMiddleware;
