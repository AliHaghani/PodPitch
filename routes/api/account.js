var express = require('express');
import User from '../../bin/src/models/User';
import DatabaseConnection from '../../bin/src/DatabaseConnection';
const { Console } = require('console');
var router = express.Router();
var app = express();

/* GET register  */
app.post('/api/register', function(req, res) {
  //TODO call back-end functionality and respond with JSON
  try {
    let uuid = req.body['id'];
    let name = req.body['name'];
    let email = req.body['email'];

    //check username/pw
    let db = new DatabaseConnection();
    let userRef = db.getRef("users");
    let testUser = new User(email, name, uuid);
    userRef.set(testUser);
    res.send("saved " + email + " " + name + " " + uuid);
  } catch (err) {
    res.send(err);
  }
});

/* GET  call for login */
router.get('/api/login', function (req, res, next) {
  //TODO call back-end functionality and respond with JSON
});

module.exports = router;