let UserModel = require('./users.js');
let mongoose = require('mongoose');
// let bCrypt = require('bcrypt-nodejs');
let Coordinatoruser = mongoose.model('coordinatorusers', UserModel.login);
let insertCoordinator = function(newUser, callback) {
  let HASHED_PWD = UserModel.login.methods.generateHash(newUser.pwd);
  let newUserObj = new Coordinatoruser({
    email: newUser.email,
    password: HASHED_PWD,
    role: newUser.role
  });

  newUserObj.save(function(err, user) {
    if (err) {
      callback(err, null);
      return;
    }
    if (!user) {
      callback('Unable to insert the user', null);
    }
    callback(err, user);
  });
};
// end of insertCoordinator

module.exports = {
  insertCoordinator: insertCoordinator
};
