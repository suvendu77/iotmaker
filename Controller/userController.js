'use strict';

var mongoose = require('mongoose'),
  jwt = require('jsonwebtoken'),
  bcrypt = require('bcrypt');
  ///User = mongoose.model('User');

exports.loginRequired = function(req, res, next) {
  if (req.user) {
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized user!' });
  }
};

exports.adminLoginRequired = function(req, res, next) {
  if (req.adminuser) {
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized user!' });
  }
};