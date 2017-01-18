let jwt = require('jsonwebtoken');
let UserModel = require('./users');
let authCoordinator = require('./authcoordinator');
let mongoose = require('mongoose');
const config = require('../config/');
let Coordinatoruser = mongoose.model('coordinatorusers', UserModel.login);
const logger = require('./../../applogger');

let generateJWTToken = function(user, cb) {
    let payload = user;
    let options = {
        algorithm: 'HS256',
        expiresIn: 36000,
        issuer: user.email
    };

    jwt.sign(payload, config.SECRETKEY, options, function(err, jwtToken) {
        // logger.log('Sending token ', user, jwtToken);
        cb(err, user, jwtToken);
    });
};

let signin = function(email, pwd, callback, unauthCB) {
    logger.log('Email being searched: ', email);
    Coordinatoruser.findOne({
            email: email
        },
        function(err, user) {
            if (err) {
                logger.error('Database error in finding user, error: ', err);
                callback({
                    error: 'Failed to process request, please try later..!'
                }, null);
                return;
            }

            logger.log('User signing in is: ', user);

            if (!user) {
                logger.error('User ', email, ' not found..!');
                unauthCB({
                    error: 'Invalid credentials...!'
                }, null);
                return;
            }

            logger.log('Validing user password: ', pwd, ' vs ', user.password);

            if (!user.validPassword(pwd)) {
                unauthCB({
                    error: 'Invalid credentials...!'
                });
                return;
            }
              // logger.log('User signing in is: ', user);

            authCoordinator.getCoordinatorAuthToken(user).then(
                    function(details) {
                         // console.log("Returned body");
                        // console.log(details);
                    let sessionUser = {
                        email: user.email,
                        cid: details.coordinator.coordinatorId,
                        name: details.coordinator.coordinatorName,
                        gender: details.coordinator.coordinatorGender,
                        location: details.coordinator.coordinatorLocation,
                        role: details.coordinator.userRole,
                        'sm-token': details.token
                    };

                    // logger.log('Got token successfully ', sessionUser);

                    generateJWTToken(sessionUser, callback);
                },
                function(error) {
                    callback(error);
                }
            );
        });
};
module.exports = {
    signin: signin
};
