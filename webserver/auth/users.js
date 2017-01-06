let mongoose = require('mongoose');
let bCrypt = require('bcrypt-nodejs');
const logger = require('./../../applogger');


let login = mongoose.Schema({
    email: {
        type: String,
        required: true,
        match: /.+@.+\..+/,
        lowercase: true,
        unique: true
    },
    password: { type: String, required: true },
    role: { type: String, required: true }
    // functionality: [{ type: String, required: true }]
});

login.virtual('pwd')
    .set(function(pwd) {
        this.pwrd = pwd;
        this.password = this.generateHash(pwd);
    })
    .get(function() {
        return this.pwrd;
    });

// generating a hash
login.methods.generateHash = function(password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
};

// checking if password is valid
login.methods.validPassword = function(password) {
    logger.log('Validating password: ', password, ' - vs - ', this.password);
    return bCrypt.compareSync(password, this.password);
};

module.exports = {
    login: login
  };
