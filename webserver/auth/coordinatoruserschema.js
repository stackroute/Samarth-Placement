let mongoose = require('mongoose');
let bCrypt = require('bcrypt-nodejs');

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

// // generating a hash
login.methods.generateHash = function(password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
};

// module.exports = login;
module.exports = mongoose.model("coordinatorusers", login, "coordinatorusers");

