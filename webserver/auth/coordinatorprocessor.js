let UserModel = require('./users.js');
let mongoose = require('mongoose');
// let bCrypt = require('bcrypt-nodejs');
let Coordinatoruser = mongoose.model('coordinatorusers', UserModel.login);
let insertCoordinator = function(newUser, callback) {
  // console.log('newUser');
  // console.log(newUser);
  let HASHED_PWD = UserModel.login.methods.generateHash(newUser.password);
  let newUserObj = new Coordinatoruser({
    email: newUser.email,
    password: HASHED_PWD,
    role: newUser.role
  });

  newUserObj.save(function(err, user) {
    // console.log('save err');
    console.log(err);
    if (err) {
      callback(err, null);
      return;
    }
    if (!user) {
      callback('Unable to insert the user', null);
    }
    callback(null, user);
  });
};
// end of insertCoordinator

module.exports = {
  insertCoordinator: insertCoordinator
};
