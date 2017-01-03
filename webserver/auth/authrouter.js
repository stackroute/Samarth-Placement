let authByToken = require('./authbytoken');
const logger = require('./../../applogger');
let bodyParser = require('body-parser');
let apiRoutes = require('express').Router();
let jsonBodyParser = bodyParser.json();
let coordinatorprocessor = require('./coordinatorprocessor');
let urlEncodedParser = bodyParser.urlencoded({
  extended: false
});
apiRoutes.post('/signin', jsonBodyParser, urlEncodedParser, function(req, res) {
  if (!req.body.email || !req.body.pwd) {
    res.status(401).json({
      error: 'Please try with valid credentials..!'
    });
    return;
  }

  try {
    authByToken.signin(req.body.email, req.body.pwd,
      function(err, user, jwtToken) {
        if (err) {
          logger.log('Called back with error  : ', err);
          return res.status(500).json({
            error: 'Internal error in processing request, please retry later..!'
          });
        }

        if (!jwtToken) {
          return res.status(403).json({
            error: 'Internal error in processing request, please retry later..!'
          });
        }
        user.token = jwtToken;
        return res.status(200).json(user);
      },
      function(err) {
        logger.log('Signin failed with error : ', err);
        return res.status(403).json(err);
      });
  } catch (err) {
    logger.log('Caught error: ', err);
    // return res.status(500).json({
    //   error: 'Internal error in processing request, please retry later..!'
    // });
  }
});

apiRoutes.post('/insertdata', jsonBodyParser, urlEncodedParser,
  function(req, res) {coordinatorprocessor.insertCoordinator(req.body,
    function(err, user) {
      if (err) {
        return res.status(500).json({
          error: 'User already exists'
        });
      }
      return res.status(200).json(user);
    },
    function(err) {
      return res.status(403).json(err);
    });
  // insertCoordinator ends
  });

module.exports = apiRoutes;
