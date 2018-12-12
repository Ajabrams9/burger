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


router.post("/api/burger", function (req, res) {
    burger.insertOne(["burger_name"], [req.body.burger_name], function (result) {
        // Send back the ID of the new quote
        res.json({
            id: result.insertId
        });
    });
});


router.post('/burger/create', function (req, res) {
    burger.insertOne(req.body.burger_name, function () {
        res.redirect('/index');
    });
});

router.put("/api/burger/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
            burger_name: req.body.burger_name
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();

        }
    );
});

module.exports = router;