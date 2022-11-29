const todoSchema = require("../models/cartSchema");

const getHotel = (req, res) => {
  
    const body = req.body;

    console.log(body, "body")
    
        todoSchema.create(body, (error, data) => {

            if (error) {

                res.send(error)

                console.log("error",error)
            }

            else {

                res.send(data)
                
                console.log("Successfully Added")
            }

        });

    };

module.exports = getHotel;
