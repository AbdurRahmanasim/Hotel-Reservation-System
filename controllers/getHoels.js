const todoSchema = require("../models/cartSchema");

const getHotel = async (req, res) => {

    try{
        const sortHotel = await todoSchema.find({}).sort({
            created_on: "-1",
        });

        res.send(sortHotel);

    } catch (err) {

        res.json({"ERROR": "Hotel Not Found"});

    }

    
};

module.exports = getHotel;
