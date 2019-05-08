const jwt = require('jsonwebtoken')
const { secret } = require('./../config/config.json');
const { userModel } = require('./../models');
const { admin } = require('./../helpers/role')

const login = (req, res) => {
  userModel.findOne(req.body, {})
    .then(data => {
      jwt.sign({ data: data }, secret, function (err, token) {
        if (err) throw err;
        res.json({ data, token })
      })
    })
    .catch(err => res.status(400).json(err))
}

const signUp = (req, res) => {
  req.body["role"] = "User";
  const user = new userModel(req.body)
  user.save()
    .then(item => res.json({ message: "SignUp successfully" }))
    .catch(err => res.status(400).json(err))
}


const createUser = (req, res) => {
  req.body["role"] = "User";
  const user = new userModel(req.body)
  user.save()
    .then(item => res.json({ message: "User Created successfully" }))
    .catch(err => res.status(400).json(err));
}

const allUsers = (req, res) => {
  userModel.find({}, { name: 1, email: "", })
    .then(item => res.json({ data: item }))
    .catch(err => res.status(400).json(err));
}

const editUser = (req, res) => {
  const currentUser = req.user.data;
  const email = req.params.email;
  let obj = { email }
  if (email !== currentUser.email && currentUser.role !== admin)
    return res.status(401).json({ message: 'Unauthorized' });
  userModel.findOneAndUpdate(obj, req.body)
    .then(user => user ? res.json({ message: "User Updated Successfully" }) : res.status(404).json({ message: "User not found" }))
    .catch(err => res.status(400).json(err));
}

module.exports = {
  login,
  signUp,
  allUsers,
  createUser,
  editUser
};