var router = require('express').Router();
var authByToken = require('./authbytoken');
var UserModel = require("./users");
var bodyParser = require('body-parser');
var apiRoutes = require('express').Router();
var jsonBodyParser = bodyParser.json();
var urlEncodedParser = bodyParser.urlencoded({
    extended: false
});



apiRoutes.post('/signin', function(req, res) {

    if (!req.body.email || !req.body.pwd) {

        res.json({
            error: "Please try with valid credentials..!"
        });
        return;
    }

    try {

        authByToken.signin(req.body.email, req.body.pwd,
            function(err, user, jwtToken) {
                if (err) {

                    return res.status(500).json({
                        error: "Internal error in processing request, please retry later..!"
                    });
                }

                if (!jwtToken) {

                    console.error("Empty token generated...!");
                    return res.status(403).json({
                        error: "Internal error in processing request, please retry later..!"
                    });
                } else {

                    user['token'] = jwtToken;
                    return res.status(200).json(user);
                }
            },
            function(err) {
                return res.status(403).json(err);
            });
    } catch (err) {
        console.error("Error in signin ", err);
        return res.status(500).json({
            error: "Internal error in processing request, please retry later..!"
        });
    }

}); 

module.exports = apiRoutes;






