const bookingformModel = require("../models/bookingform");

const BookingformController = (req, res) => {

    const {username, cnic, address, contact, days}  = req.body;

    if (!username || !cnic || !address || !contact || !days) {
            
        res.send("Required field's are empty.")
    }
    else {
        bookingformModel.create(req.body, (error, data) => {
            if (error) {
                res.send(error)
            }
            else {
                res.send(data)
            }
        });

    };
};

module.exports = BookingformController;
