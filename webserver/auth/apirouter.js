const express=require('express');
const config = require('../config/');
// get an instance of the router for api routes
let jwt    = require('jsonwebtoken');
let apiRoutes = express.Router();
// let navbarprocessor= require('./navbarprocessor');


// route middleware to verify a token
apiRoutes.use(function(req, res, next) {
   // check header(Authorization Bearer) or url parameters(access_token) or post parameters(access_token) for token
  let token = req.token;
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, config.SECRETKEY, function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        req.decoded = decoded;
        next();
      }
    });

  } else {
    // if there is no token return an error
    return res.status(403).send({
        success: false,
        message: 'No token provided.'
    });

  }
});

module.exports = apiRoutes;
