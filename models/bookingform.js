const mongoose = require("mongoose");

const bookingformSchema = new mongoose.Schema({

  username: {
    type: String,
  },

  cnic: {
    type: String,
  },

  address: {
    type: String,
  },

  contact: {
    type: String,
  },

  days: {
    type: String,
  },

  person: {
    type: String,
  },
  book_id : {
    type: String,
  },

  created_on: {
    type: Date,
    default: Date.now,
  },
  
});

const bookingformModel = mongoose.model("bookingdata", bookingformSchema);

module.exports = bookingformModel;




