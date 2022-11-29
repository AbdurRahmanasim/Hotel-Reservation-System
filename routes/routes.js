const express = require("express");
const router = express.Router();

const signupController = require("../controllers/signup");
const loginController = require("../controllers/Login");
const BookingformController = require("../controllers/BookingForm")
const getBookingData = require("../controllers/getBookingData");
const createTodo = require("../controllers/createCart");
const getHotel = require("../controllers/getHoels")
const DeleteHotel = require("../controllers/DeleteHotel")
const EditHotel = require("../controllers/EditHotel");
const contactModel = require("../models/contactSchema");
const getallusers = require("../controllers/GetAllUsers");
const feedbackModal = require("../models/userFeedback");
const requestModal = require("../models/adminRequest");


// Login Signup Routes
router.post("/api/signup", signupController);
router.post("/api/login", loginController);

// Get All User
router.get("/api/signup/getusers", getallusers);


// create hotel
router.post("/api/todo/add", createTodo);

// Get Hotel data (APIs ke path change hosakte hain)
router.get("/api/todo/getHotel", getHotel);

// Delete Hotel Data
router.delete("/api/todo/deleteHotel/:id", DeleteHotel);

// Edit Hotel Data
router.put("/api/todo/edithotel/:id", EditHotel)


// Create Booking Data Route
router.post("/api/bookingform", BookingformController)

// Get Booking Data Route
router.get("/api/bookingform", getBookingData);


// Contact Form
router.post("/api/contact", (req, res) => {

    const body = req.body;

    contactModel.create(body, (err, data) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(data)
        }
    });
});

// Get Contact data
router.get("/api/getcontact", (req, res) => {

    contactModel.find({}, (err, data) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(data)
        }
    });
});



// Delete Contact data
router.delete("/api/deletecontact/:id", (req, res) => {

    const { id } = req.params

    contactModel.findByIdAndDelete({_id : id}, (err, data) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(data)
        }
    });
});


// Create Feedback
router.post("/api/sendfeedback", (req, res) => {

    const body = req.body;

    feedbackModal.create(body, (err, data) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(data)
        }
    });
});


// Get Feedback
router.get("/api/getusersfeeback", (req, res) => {

    feedbackModal.find({}, (err, data) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(data)
        }
    });
});


// Create Feedback
router.post("/api/sendrequest", (req, res) => {

    const body = req.body;

    requestModal.create(body, (err, data) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(data)
        }
    });
});


// Get All Requests
router.get("/api/getrequest", (req, res) => {

    requestModal.find({}, (err, data) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(data)
        }
    });
});



// Delete Request data
router.delete("/api/deleterequest/:id", (req, res) => {

    const { id } = req.params

    requestModal.findByIdAndDelete({_id : id}, (err, data) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(data)
        }
    });
});

module.exports = router;
