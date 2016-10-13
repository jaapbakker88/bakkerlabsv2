"use strict";

var express = require('express');
var path = require('path');
var parser = require('body-parser');
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
var router = require('./routes');

var app = express();

app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'jade');
app.use('public', express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(parser.json());
app.use(parser.urlencoded({extended: false}));

app.listen(1337, function () {
  console.log('Server is running on port 1337...')
});

app.use('/', router);

app.use('/submit', router);
