const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


// Router's Connectivity... 
const router = require("./routes/routes");


// Schema's Connection...
const UserModel = require("./models/userSchema");


// Local Variables...
const app = express();
const PORT = 5000;


//Allow Body | Otherwise body return undefined...
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Front-end to Back-end Communication...
app.use(cors());


// Database Connectivity...

mongoose.connect("mongodb+srv://admin:admin@cluster0.9tqlk.mongodb.net/?retryWrites=true&w=majority");
mongoose.connection.on("connected", () => console.log("Database is Connected"));
mongoose.connection.on("error", (err) => console.log(err));


// All Routes | API's...
app.use(router);


// Listen to Server...
app.listen(PORT, () => console.log(`Server is running on localhost : ${PORT}`));
