const model = require("../models/bookingform");

const getBookingData = (req, res) => {

    model.find({}, (err, data) => {

        if (err) {

            res.send(err)

        } else {

            res.send(data)
        }
        
    });
};

module.exports = getBookingData;

