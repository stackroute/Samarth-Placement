// let mongoose = require('mongoose');
// let bCrypt = require('bcrypt-nodejs');

// let schema = mongoose.Schema({
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true,
//         min: 10
//     },
//     hash_pwd: {
//         type: String,
//         required: true
//     },
//     status: {
//         type: String,
//         default: 'active',
//         enum: ['active', 'disabled']
//     },
//     createdon: {
//         type: Date,
//         default: Date.now
//     },
//     lastseenon: {
//         type: Date,
//         default: Date.now
//     }
// });

// // //virtuals
// schema
//     .virtual('pwd')
//     .set(function(pwd) {
//         this._pwd = pwd;
//         this.hash_pwd = this.encryptPassword(pwd);
//     })
//     .get(function() {
//         return this._pwd;
//     });

// schema.methods = {
//     validPassword: function(plainText) {
//         return bCrypt.compareSync(plainText, this.hash_pwd);
//     },

//     encryptPassword: function(plainText) {
//         return bCrypt.hashSync(plainText, bCrypt.genSaltSync(10), null);
//     }
// };


// module.exports = mongoose.model('users', schema, 'users');


var mongoose = require('mongoose');
var bCrypt = require('bcrypt-nodejs');

var login = mongoose.Schema({
    email: {
        type: String,
        required: true,
        match: /.+@.+\..+/,
        lowercase: true,
        unique: true
    },
    password: { type: String, required: true },
    role: { type: String, required: true }
    //functionality: [{ type: String, required: true }]
});

login.virtual('pwd')
    .set(function(pwd) {
        this._pwd = pwd;
        this.password = this.generateHash(pwd);
    })
    .get(function() {
        return this._pwd;
    });


// generating a hash
login.methods.generateHash = function(password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
};

// checking if password is valid
login.methods.validPassword = function(password) {
    return bCrypt.compareSync(password, this.password);
};


module.exports = {
    "login": login
    // "sidenavcontent": sidenavcontent
};
