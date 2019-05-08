var express = require('express');
const authorize = require('./../helpers/authorize');
const { admin } = require('./../helpers/role');
const { login, signUp, allUsers, createUser, editUser } = require('./../controllers');

var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


router.post('/login', login);
router.post('/signUp', signUp);
router.get('/all', authorize(admin), allUsers)
router.post('/create', authorize(admin), createUser)
router.post('/edit/:email', authorize(), editUser)



module.exports = router;
