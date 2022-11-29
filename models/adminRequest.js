const mongoos = require("mongoose");

const requestSchema = mongoos.Schema({

    ownername : {
        type: String
    },

    owneremail : {
        type: String
    },
    
    reason : {
        type: String
    },

    created_on : {
        type : Date,
        default:Date.now
    }
});

const requestModal = mongoos.model("Admin Request" ,requestSchema);


module.exports = requestModal;