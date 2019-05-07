const Joi = require('joi')

const loginValidator = {
  body: {
    email: Joi.string().email().required(),
    password: Joi.string().email().required(),
  }
}

const signUpValidator = {
  body: {
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    gender: Joi.string().required(),
  }
}

module.exports = {
  loginValidator,
  signUpValidator
}