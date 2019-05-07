const jwt = require('jsonwebtoken')
const { secret } = require('./../config/config.json');
const { userModel } = require('./../models');



const login = (req, res) => {
  userModel.findOne(req.body, {})
    .then(data => {
      const token = jwt.sign(data, secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      console.log(token)
      res.json(data)
    })
    .catch(err => { res.status(400).json(err) })
}

const signUp = (req, res) => {
  const user = new userModel(req.body)
  user.save()
    .then(item => res.json({ message: "SignUp successfully" }))
    .catch(err => { res.status(400).json(err); })
}

module.exports = {
  login,
  signUp
};