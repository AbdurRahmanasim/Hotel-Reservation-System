import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';
import "../App.css";
import Loader from "../Components/Loader.jsx";
import { toast } from 'react-toastify';
import Toast from "../Components/Toast.jsx";
import MyFooter from './Footer';
import MyCopyright from './MyCopyright';
import Navbar from './Navbar';



const Signup = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [password, setpassword] = useState("");
    const [role, setRole] = useState("");


    const [isChecked, setIsChecked] = useState(false);
    const [loading, setLoading] = useState(false);


    const navigate = useNavigate();

    const userObj = {
        username,
        email,
        contact,
        password,
        role
    };


    // Form Submission Handler....
    const submitHandler = (e) => {

        e.preventDefault();

        setLoading(true);

        if (!username || !email || !contact || !password) {

            // toast("Fields cant be empty");
            toast.error("Field's can't be empty", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });

            setLoading(false);

        }

        else {
            axios.post("http://localhost:5000/api/signup", userObj)

                .then((res) => {
                    if (res.data.message === "Email address is already exist.") {
                        toast.error('Email address is already exist', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                        });
                    } else {
                        toast.success('User Successfully Registered', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                        });

                        setTimeout(() => navigate("/login"), 2000)
                    }


                    setLoading(false);

                    console.log(res);

                })

                .catch((err) => {
                    toast.error("Axios Error", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                    });
                    setLoading(false);
                    console.log(err);

                });
        };
    };

    const toggleHandler = () => {
        setIsChecked(!isChecked)
    };

    return (
        <>


<Navbar />

            {/*Form  */}

            <div className="myContainer">

                <form className="myform" onSubmit={submitHandler}>
                    <h1>SIGNUP FORM</h1>
                    <input
                        type="text"
                        placeholder="ENTER YOUR NAME"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="ENTER YOUR EMAIL"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <input
                        type="number"
                        placeholder="ENTER YOUR CONTACT NUMBER"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                    />
                    <br />
                    <div>
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="form-control">
                            <option>Choose...</option>
                            <option value="User">User</option>
                            <option value="Hotel Owner">Hotel Owner</option>
                        </select>
                    </div>

                    <input
                        type="password"
                        placeholder="ENTER YOUR PASSWORD"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                    />
                    <br />
                    {
                        loading ? <div className='loader'><Loader /></div>


                            : <button className="signupBtn" >Signup</button>
                    }



                    <br />
                    <p className="redirectPage">Already a Member?&nbsp;&nbsp;
                        <button className="Log" onClick={() => navigate("/login")}>Login here</button></p>
                </form>

            </div>



            {/* FOOTER */}
            <MyFooter />
            <MyCopyright />



            <Toast />

        </>

    )
};

export default Signup;
