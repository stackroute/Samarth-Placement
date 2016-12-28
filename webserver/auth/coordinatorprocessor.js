let UserModel = require('./users.js');
let mongoose = require('mongoose');
let bCrypt = require('bcrypt-nodejs');
let coordinatoruser = mongoose.model('coordinatorusers', UserModel.login);
let insertCoordinator = function(newUser, callback, unauth) {
  let hashed_pwd = UserModel.login.methods.generateHash(newUser.pwd);
  let newUserObj = new coordinatoruser({
    email: newUser.email,
    password: hashed_pwd,
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
}; // end of insertCoordinator
module.exports = {
  insertCoordinator: insertCoordinator
};