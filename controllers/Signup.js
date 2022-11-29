const UserModel = require("../models/userSchema");
const bcryptjs = require("bcryptjs");


const signupController = async (req, res) => {

    const { username, email, contact, role, password } = req.body;

    if (!username || !email || !contact || !role || !password) {

        return res.json({ "message": "Required fields are empty." });

    };

    const hashPass = await bcryptjs.hash(password, 10);

    const userObj = {

        ...req.body,

        password: hashPass

    };

    UserModel.findOne({ email }, (err, userData) => {

        if (err) {

            res.send(err);

        } 

        else if (userData) {

            console.log(userData);

            res.json({ message: "Email address is already exist." });

        } 

        else {
            UserModel.create(userObj, (err, _ ) => {

                if (err) {

                    res.send(err);

                } else {

                    res.json({ "message": "User Successfully Registered." });
                    
                }
            });
        }
    });
};



module.exports = signupController;
