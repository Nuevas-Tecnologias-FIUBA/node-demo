// Dependencies
var express = require('express');
var router = express.Router();

// Models
var cat = require('../models/cat');
var student = require('../models/student');

// Routes
cat.methods(['get', 'put', 'post', 'delete']);
cat.register(router, '/cat');

student.methods(['get', 'put', 'post', 'delete']);
student.register(router, '/student');
// Return router
module.exports = router;
