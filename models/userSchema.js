const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    
    username: {
        type : String
    },

    email: 
    { 
        type: String
        // unique: true 
    },

    contact: {
        type: String,
        // maxlength: 11,
        // unique: true,
    },

    role: {
        type: String,
    },

    password: {
        type: String
    }

});

const UserModel = mongoose.model("SignUp", userSchema);

module.exports = UserModel;