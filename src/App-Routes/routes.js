import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "../Components/Signup.jsx";
import Todo from "../Components/AddCart.jsx";
import Login from "../Components/Login.jsx";
import Profile from "../Components/Profile.jsx";
import Booking from "../Components/Booking.jsx";
import AdminDashboard from "../Components/AdminDashboard.jsx";
import LandingPage from "../Components/LandingPage.jsx";
import About from "../Components/About.jsx";
import Contact from "../Components/Contact.jsx";
import BookingForm from "../Components/BookingForm.jsx";
import Checkout from "../Components/Checkout.jsx";
import Logout from "../Components/Logout.jsx";
import Users from "../Components/allUsers.jsx";
import AdminUserContact from "../Components/adminUserContact"
import Orders from "../Components/Orders.jsx";
import Feedback from "../Components/Feedback.jsx";
import OwnerRequest from "../Components/OwnerRequest.jsx";
import AdminAuth from "../Components/AdminAuth.jsx";

const AppRoutes = () => {
  
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookingform" element={<BookingForm />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contactdetails" element={<AdminUserContact />} />
        <Route path="/allusers" element={<Users />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/request" element={<OwnerRequest />} />
        <Route path="/adminownerreq" element={<AdminAuth />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
