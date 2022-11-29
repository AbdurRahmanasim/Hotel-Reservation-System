const bookingModel = require("../models/bookingdata");

const addhotel = (req, res) => {

    const { Hotel, Service } = req.body

    if (!Hotel || !Service) {
        res.send("Required field's are empty.")
    }
    else {

        todoSchema.create(req.body, (error, data) => {
            if (error) {
                res.send(error)
            }
            else {
                res.send(data)
            }
        });
    };
};

module.exports = addhotel;
