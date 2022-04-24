var express = require('express')
var router = express.Router()
var models = require('../models')

router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

router.get('/:user_id', function (req, res, next) {
  var user_id = parseInt(req.params.user_id, 10) || 0
  if (user_id === 1) {
    console.log(models.users.get);
    const user = models.users.get(user_id);
    res.send('user info for user: \n' + JSON.stringify(user, null, 2))
  } else {
    res.send('Invalid user id.')
  }
})

module.exports = router
