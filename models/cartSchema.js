const mongoos = require("mongoose");

const todoSchema = mongoos.Schema({

    roomType : {
        type: String
    },

    price : {
        type: String
    }, 
    images : {
        type: String
    },
    ownerId : {
        type: String
    },
    created_on : {
        type : Date,
        default:Date.now
    }
});

const TodoModal = mongoos.model("Hotel" ,todoSchema);


module.exports = TodoModal;