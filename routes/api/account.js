var express = require('express');
var router = express.Router();

/* GET login. */
router.get('/api/login', function(req, res, next) {
  //TODO call back-end functionality and respond with JSON
  //check username/pw
});

/* GET  call for register */
router.get('/api/register', function (req, res, next) {
  //TODO call back-end functionality and respond with JSON
});

module.exports = router;