// Inside the burgers_controller.js file, import the following:

// Express
// burger.js

var express = require("express");
var router = express.Router();
// const path = require('path');

var burger = require("../models/burger.js")

// Data

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(data);
        console.log(hbsObject);
        res.render("index", hbsObject);
        // res.send("Welcome to the Star Wars Page!");
        // res.sendFile(path.join(__dirname, "index.html"));
    });
    
});


router.post('/burger/create', function (req, res) {
    burger.insertOne(req.body.burger_name, function () {
        res.redirect('/');
    });
});

router.post('/burger/devour/:id', function (req, res) 
{
  burger.updateOne(req.params.id, function() 
  {
    res.redirect('/');
  });
});

module.exports = router;