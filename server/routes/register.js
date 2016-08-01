var express = require('express');
var router = express.Router();
var Admin = require("../models/admin.js");

router.post('/', function(req, res, next){
  console.log("Inside Register.js Post, yo", req.body)
    Admin.create(req.body, function(err, post){
        if(err){
            next(err);
        }else{
            res.redirect('/');
        }
    });
});

module.exports = router;
