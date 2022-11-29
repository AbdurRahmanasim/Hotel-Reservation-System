const mongoos = require("mongoose");

const feedbackSchema = mongoos.Schema({

    username : {
        type: String
    },

    feedback : {
        type: String
    }, 

    created_on : {
        type : Date,
        default:Date.now
    }
});

const feedbackModal = mongoos.model("Feedback" ,feedbackSchema);


module.exports = feedbackModal;