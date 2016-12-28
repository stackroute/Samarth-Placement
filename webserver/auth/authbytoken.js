let jwt = require('jsonwebtoken');
let UserModel = require('./users');
let authCoordinator = require('./authcoordinator');
let mongoose = require('mongoose');
let coordinatoruser = mongoose.model('coordinatorusers', UserModel.login);

let generateJWTToken = function(user, cb) {
    let payload = user;
    let secretOrPrivateKey = 'SAMARTH-WEBAPP-SECRET';
    let options = {
        algorithm: "HS256",
        expiresIn: 36000,
        issuer: user.email
    };

    jwt.sign(payload, secretOrPrivateKey, options, function(err, jwtToken) {
        console.log("Sending token ", user, jwtToken);
        cb(err, user, jwtToken);
    });
}

let signin = function(email, pwd, callback, unauthCB) {
    console.log("Email being searched: ", email);
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

            console.log("User signing in is: ", user);

            if (!user) {
                console.error('User ', email, ' not found..!');
                unauthCB({
                    error: "Invalid credentials...!"
                }, null);
                return;
            }

            console.log("Validing user password: ", pwd, " vs ", user.password);

            if (!user.validPassword(pwd)) {
                unauthCB({
                    error: "Invalid credentials...!"
                });
                return;
            }
              console.log("User signing in is: ", user);

            authCoordinator.getCoordinatorAuthToken(user).then(
                function(details) {
                
                    let sessionUser = {
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
module.exports = {
    "signin": signin
};