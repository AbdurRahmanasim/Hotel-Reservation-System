const todoSchema = require("../models/cartSchema");

const DeleteHotel = (req, res) => {

    const { id } = req.params

    console.log(id, "id")

    todoSchema.findByIdAndDelete({ _id: id }, (error, data) => {

        if (error) {
            res.send(error)
        }
        else {
            res.send(data)
        }
    });
};


module.exports = DeleteHotel;