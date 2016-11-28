var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

var assert = require('assert');
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://admin:admin@ds111178.mlab.com:11178/fiboreserchroom';

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


/////// insert data to database v.001 not compelet

router.post('/insert', function(req, res, next) {

    /////// user data var for insert
    var users = {
        username: req.body.username,
        password: req.body.password,
        fname : req.body.fname,
        lname : req.body.lname,
        tel   : req.body.tel,
        email : req.body.email,
        level : req.body.level
    };

    /////// connect to DB & insert data to DB
    mongo.connect(url, function(err, db) {
        assert.equal(null, err);
        db.collection('user').insertOne(users, function(err, result) {
            assert.equal(null, err);
            console.log('Item inserted');
            db.close();
        });
    });
    res.redirect('/');
});

module.exports = router;
