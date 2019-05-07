var express = require('express');
const ev = require('express-validator');

const { loginValidator, signUpValidator } = require('./../validators')
const { login, signUp } = require('./../controllers');

var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


router.post('/login', ev(loginValidator), login);
router.post('/signUp', ev(signUpValidator), signUp);

module.exports = router;
