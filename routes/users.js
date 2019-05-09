var express = require('express');
const authorize = require('./../helpers/authorize');
const { admin } = require('./../helpers/role');
const ev = require('express-validation')
const { loginValidator } = require('./../validators')
const { login, signUp, allUsers, createUser, editUser } = require('./../controllers');

var router = express.Router();

router.post('/login', ev(loginValidator), login);
router.post('/signUp', signUp);
router.get('/all', authorize(admin), allUsers)
router.post('/create', authorize(admin), createUser)
router.post('/edit/:email', authorize(), editUser)



module.exports = router;
