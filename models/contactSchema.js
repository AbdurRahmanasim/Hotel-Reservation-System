const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    
    name: {
        type : String
    },

    email: 
    { 
        type: String
        // unique: true 
    },

    message: {
        type: String,
        // maxlength: 11,
        // unique: true,
    },

});

const contactModel = mongoose.model("contactUs", contactSchema);

module.exports = contactModel;