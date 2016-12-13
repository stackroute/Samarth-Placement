// var mongoose = require('mongoose');
// var bCrypt = require('bcrypt-nodejs');

// var login = mongoose.Schema({
//     email: {
//         type: String,
//         required: true,
//         match: /.+@.+\..+/,
//         lowercase: true,
//         unique: true
//     },
//     password: { type: String, required: true },
//     role: { type: String, required: true }

// });

// login.virtual('pwd')
//     .set(function(pwd) {
//         this._pwd = pwd;
//         this.password = this.generateHash(pwd);
//     })
//     .get(function() {
//         return this._pwd;
//     });



// login.methods.generateHash = function(password) {
//     return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
// };


// login.methods.validPassword = function(password) {
//     return bCrypt.compareSync(password, this.password);
// };


// module.exports = {
//     "login": login
//   };
