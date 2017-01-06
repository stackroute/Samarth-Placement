let request = require('request');
// const logger = require('./../../applogger');

// @TODO take this from config
let platformURL = 'localhost:8081';


let getCoordinatorAuthToken = function(user) {
    return new Promise(function(resolve, reject) {
        let options = {
            method: 'POST',
            json: true,
            url: 'http://' + platformURL + '/details/getcoordinator/',
            form: {
               email: user.email,
                ct: '@TODO-samarth-skill-profile-webapp-token'
            }
        };

        request(options, function(err, res, body) {
            if (err || res.isUndefined || res.statusCode.isUndefined) {
                reject({
                    error: err
                });
            } else if (res.statusCode >= 200 && res.statusCode <= 299) {
               resolve(body);
            }
        });
    });
};

module.exports = {
    getCoordinatorAuthToken: getCoordinatorAuthToken
};

