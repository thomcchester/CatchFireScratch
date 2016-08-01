var express = require('express');
var router = express.Router();
var Submit = require("../models/contact.js");

router.route('/')
    .get(function(req,res){
      Submit.find({status: {$ne: 'Deleted'}}, function(err, defaults){
        if(err){console.log(err);}
        res.send(defaults);
      });
    })

    .post(function(req, res){
      console.log("User submitted this email: ", req.body);
      var newContact = new Submit({
          email: req.body.email,
          marital_status: req.body.maritalStatus,
          zip_code: req.body.zipCode,
          income: req.body.income,
          target_property_price: req.body.targetPropertyPrice,
          followup: req.body.followup,
          date: Date(),
          status: "Not Contacted"
      });
      Submit.create(newContact, function(err, post){
        if(err){
          console.log(err);
        }
        res.send("end of submit.create", post);
      });


    });


    router.route('/delete/:id').put(function(req, res){
      console.log(req.body);

        Submit.findOneAndUpdate({_id: req.body._id}, {
          status: "Deleted"
        }, function(err, doc){
          if(err){
            console.log(err);
          }
          res.json();
        });
    });

    router.route('/statusChange/:id').put(function(req, res){
      console.log(req.body);

        Submit.findOneAndUpdate({_id: req.body._id}, {
          status: "Contacted"
        }, function(err, doc){
          if(err){
            console.log(err);
          }
          res.json();
        });
    });

    router.route('/statusChangeBack/:id').put(function(req, res){
      console.log(req.body);

        Submit.findOneAndUpdate({_id: req.body._id}, {
          status: "Not Contacted"
        }, function(err, doc){
          if(err){
            console.log(err);
          }
          res.json();
        });
    });

module.exports = router;
