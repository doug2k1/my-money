const authMiddleware = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  res.status(401).send();
};

module.exports = authMiddleware;
