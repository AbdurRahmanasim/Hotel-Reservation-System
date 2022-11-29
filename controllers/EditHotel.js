const model = require("../models/cartSchema");

const EditHotel = (req, res) => {

    const body = req.body;
    
    const { id } = req.params 

    model.findByIdAndUpdate({ _id: id }, body, { new: true }, (err, data) => {

        if(err){
            res.send(err)
        }
        else{
            res.send(data)
        }
    });

    // res.send("Edited")
    // console.log("edited")


    // console.log(body, "editBody")
    // console.log(id, "id")

};
   
module.exports = EditHotel;
