const mongoose = require('mongoose');
const { user } = require("./../helpers/role")
const signUpSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: user
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('users', signUpSchema);