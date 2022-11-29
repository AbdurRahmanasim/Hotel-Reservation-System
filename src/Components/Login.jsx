import React, { useEffect, useState } from "react";
import { LoginAction } from "../redux-store/actions/loginAction";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import Toast from "../Components/Toast.jsx";
import "../Styles/login.css";
import MyFooter from './Footer';
import MyCopyright from './MyCopyright';
import Navbar from "./Navbar";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const userData = localStorage.getItem("user");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {
    statesuserData,
    userDataLoading,
    userDataError,
    userDataMessage } = useSelector((state) => state.LoginReducer);


  // Login Functionality Handler...
  const loginHandler = (e) => {

    e.preventDefault();


    if (!email || !password) {

      return toast.error("Field's can't be empty", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }

    const userObj = {

      email,
      password,

    };

    dispatch(LoginAction(userObj));

  }; 

  useEffect(() => {

    if (userDataMessage) {

      console.log(userDataMessage);

      navigate("/login", { replace: true });

    };

  }, [userDataMessage]);

  useEffect(() => {

    if (userData) {
      
      toast.success("Loggedin Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      })

      setTimeout(() => navigate("/"), 2000)



    }


  }, [userDataMessage, userData]);

  const toggleHandler = () => {

    setIsChecked(!isChecked);

  };

  return (
    <> 
    <Navbar />
    
    
    {/* NavBar */}
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href='#'>MIR</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ">
          <ul className="navbar-nav">
            <li className="nav-item text-right">
              <NavLink className="nav-link" to="/landing">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/admin">Admin</NavLink>
            </li>

          </ul>
        </div>
        <div className="collapse navbar-collapse d-flex justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item text-right">
              <NavLink className="nav-link" to="/signup">Register</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/">Signin</NavLink>
            </li>
          </ul>
        </div>
      </nav> */}
      <div className="myContainer">


        <form className="myform" onSubmit={loginHandler}>
          <h1>LOGIN FORM</h1>
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <br />
          <input

            type={isChecked ? "text" : "password"}
            placeholder="ENTER YOUR PASSWORD"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <br />
          {/* <input 
                    type="checkbox" 
                    checked = {isChecked}
                    onChange = {toggleHandler}
                    />
                    <label>Show</label> */}


          <button className="signupBtn" >SIGNIN</button>



          <br />
          <p className="redirectPage">New Member?&nbsp;&nbsp;
            <button className="Log" onClick={() => navigate("/signup")}>Signup here</button></p>
        </form>

      </div>

      <MyFooter />
      <MyCopyright />


      <Toast />


    </>

  );
};

export default Login;
