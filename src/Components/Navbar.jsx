import React  from "react";
import { NavLink } from "react-router-dom";
import "../Styles/myNavbar.css"

const Navbar = () => {

   //  Local Storage

   const user = localStorage.getItem("user");

   const getUserData = JSON.parse(user);



    return(
        <>



        {/* NavBar */}
        <nav className="navbar navbar-expand-lg navLinks navbar-dark">
                <a className="navbar-brand logo" href='#'>HRS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse list mx-3">
                    <ul className="navbar-nav">

                   {

                       !getUserData ? (

                           <>

                        <li className="nav-item text-right" >
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active"  to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/signup">Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeClassName="active" to="/login">Signin</NavLink>
                        </li>

                        </>
                       )

                       : getUserData.role === "User" ? 
                       (
                           <>
                           <li className="nav-item text-right">
                            <NavLink className="nav-link"activeClassName="active" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link "activeClassName="active" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link "activeClassName="active" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link "activeClassName="active" to="/booking">Booking Data</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link "activeClassName="active" to="/feedback">Feedback</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link "  activeClassName="active" to="/profile">Profile</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link "  activeClassName="active" to="/logout">Logout</NavLink>
                        </li>
                       
                           </>
                       ) : getUserData.role === "admin" ? (<>
                        <li className="nav-item text-right" style={{color : "white !important"}}>
                            <NavLink className="nav-link"  activeClassName="active" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link "  activeClassName="active" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeClassName="active"  to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeClassName="active"  to="/contactdetails">Contact Details</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link "  activeClassName="active" to="/allusers">Users</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"  activeClassName="active" to="/adminownerreq">Owner's Request</NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink className="nav-link " activeClassName="active"  to="/profile">Profile</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeClassName="active"  to="/logout">Logout</NavLink>
                        </li>
                      
                       </>
                       )
                       
                       :(
                           <>
                           <li className="nav-item text-right">
                            <NavLink className="nav-link"activeClassName="active" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link "activeClassName="active" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link "activeClassName="active" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link "activeClassName="active" to="/admin">Create Hotel</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link "activeClassName="active" to="/orders">Orders</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link "activeClassName="active" to="/request">Request</NavLink>
                        </li>
                       
                        <li className="nav-item">
                            <NavLink className="nav-link "activeClassName="active" to="/profile">Profile</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " activeClassName="active"to="/logout">Logout</NavLink>
                        </li>
                      
                           </>
                       )


                   }
                        
                        
                        
                       
                        {/* <li className="nav-item">
                            <NavLink className="nav-link " to="/todo">User</NavLink>
                        </li> */}
                       
                       
                       
                        

                    </ul>
                </div>
              
            </nav>

        </>
    )

};

export default Navbar;