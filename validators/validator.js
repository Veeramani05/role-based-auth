const Joi = require('joi')

const loginValidator = {
  body: {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }
}

module.exports = {
  loginValidator
}