let jwt = require('jsonwebtoken');
let UserModel = require('./users');
let authCoordinator = require('./authcoordinator');
var mongoose = require('mongoose');
var coordinatoruser = mongoose.model('coordinatorusers', UserModel.login);

var signin = function(email, pwd, callback, unauthCB) {

    coordinatoruser.findOne({
            email: email
        },


        function(err, user) {
            if (err) {

                console.error("Database error in finding user, error: ", err);
                callback({
                    error: "Failed to process request, please try later..!"
                }, null)
                return;
            }

            if (!user) {

                console.error('User ', email, ' not found..!');
                unauthCB({
                    error: "Invalid credentials...!"
                }, null);
                return;
            }

            if (!user.validPassword(pwd)) {
                unauthCB({
                    error: "Invalid credentials...!"
                });
                return;
            }

            
            authCoordinator.getCoordinatorAuthToken(user).then(
                function(details) {
                    
               
                    var sessionUser = {
                        "email": user.email,
                        "cid": details.coordinator.coordinatorId,
                        "name": details.coordinator.coordinatorName,
                        "gender": details.coordinator.coordinatorGender,
                        "location": details.coordinator.coordinatorLocation,
                        "role": details.coordinator.coordinatorRole,
                        "sm-token": "TBD"
                    };

                    console.log("Got token successfully ", sessionUser);

                    generateJWTToken(sessionUser, callback); //generate JWTToken
                },
                function(err) {
                    callback(err);
                }
            );           
        }); 
}; 

var generateJWTToken = function(user, cb) {
    var payload = user;
    var secretOrPrivateKey = 'SAMARTH-WEBAPP-SECRET';
    var options = {
        algorithm: "HS256",
        expiresIn: 36000,
        issuer: user.email
    };

    jwt.sign(payload, secretOrPrivateKey, options, function(err, jwtToken) {
        console.log("Sending token ", user, jwtToken);
        cb(err, user, jwtToken);
    });
}

module.exports = {
    "signin": signin
};


