
const expressJwt = require('express-jwt');
const { secret } = require('./../config/config.json');

const authorize = (roles = []) => {
  if (typeof roles === 'string')
    roles = [roles];
  return [
    expressJwt({ secret }),
    (req, res, next) => {
      if (roles.length && !roles.includes(req.user.data.role))
        return res.status(401).json({ message: 'Unauthorized' });
      next();
    }
  ];
}

module.exports = authorize;