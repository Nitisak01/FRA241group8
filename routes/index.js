var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

var db = mongojs('mongodb://admin:admin@ds111178.mlab.com:11178/fiboreserchroom',['user']);

router.get('/user',function (req, res, next) {
    db.user.find(function (err, user) {
      if(err){
        res.send(err)
      }
      res.json(user);
    })
})

////////username
router.get('/user/username/:username',function (req, res, next) {
  db.user.find({ username: req.params.username , level: 1 } , function (err, user) {
    if(err){
      res.send(err)
    }
    else{
        res.json(user);
    }
  })
})

/////password
router.post('/user/password/:password',function (req, res, next) {
  var password = req.params.password;
  db.user.find({ password: password } , function (err, user) {
    if(err){
      res.send(err)
    }
    res.json(user);
  })
})



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

module.exports = router;
