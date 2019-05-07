var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const { dbURL } = require('./config/config.json')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


mongoose.Promise = global.Promise;
mongoose.connect(dbURL, { useNewUrlParser: true });

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
