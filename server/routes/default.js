var express = require('express');
var router = express.Router();
var Default = require("../models/default.js");

router.route('/')
    .get(function(req, res){
        Default.find(function(err, defaults){
            if(err){console.log(err);}
            res.send(defaults);
        });
    })
    /*  just some initial values*/
    .post(function(req, res){
        var defaults = new Default({
            monthlyRentTenantDef:req.body.monthlyRentTenantDef,
            monthlyRentTenantMin:req.body.monthlyRentTenantMin,
            monthlyRentTenantMax:req.body.monthlyRentTenantMax
        });
        defaults.save(function(err, defaults){
            if(err) console.log(err);
            res.send(defaults);
        });
    });

    router.route('/:id').put(function(req, res){
        Default.findById(req.body._id, function(err, defaults){
            if(err) res.send(err);
            console.log(req.body);

            defaults.monthlyRentTenantDef = req.body.monthlyRentTenantDef;
            defaults.monthlyRentTenantMin = req.body.monthlyRentTenantMin;
            defaults.monthlyRentTenantMax = req.body.monthlyRentTenantMax;

            defaults.save(function(err){
                if(err) res.send(err);
                res.json({message: 'defaults in'});
            });
        });
    });

module.exports = router;
