import React, { useState } from 'react'
import '../Styles/Contact.css';
import { toast } from 'react-toastify';
import Toast from "../Components/Toast.jsx";
import axios from 'axios';
import MyFooter from '../Components/Footer';
import MyCopyright from '../Components/MyCopyright';
import Navbar from './Navbar';
import Loader from './Loader';
const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const userContactObj = {
        name,
        email,
        message
    }

    const contactus = (e) => {
        e.preventDefault()

        setIsLoading(true)


        axios.post("http://localhost:5000/api/contact", userContactObj)
        .then( (res)=> {
            toast.success("We have received your message", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });

            setName("")
            setEmail("")
            setMessage("")

            setIsLoading(false)
        })

        .catch( (err)=> {
            console.log(err)
            
            setIsLoading(false)

        })


        //   console.log(userContactObj)
 
    }


    return (
        <>
        <Navbar />
           
            <div className='contactBody'>
                <section className='contactPage' >
                    <div className='content'>
                        <h2 className='contact-us-hd'>Contact Us </h2>
                        <p className='contact-us-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum maiores neque sunt accusamus numquam amet eos dolorem, unde ab impedit id odit temporibus voluptatibus minima beatae quis voluptas dolor repudiandae.</p>
                    </div>

                    <div className='mycontainer'>
                        <div className='contactInfo'>
                            <div className='box'>
                                <div className='icon'>
                                    <i className='fa fa-map-marker' aria-hidden="true"></i>

                                </div>
                                <div className='text'>
                                    <h3>Address</h3>
                                    <p>4671 Sugar Camp Road , <br />Owaton, Minnesota, <br />55060</p>
                                </div>
                            </div>

                            <div className='box'>
                                <div className='icon'>
                                    <i className='fa fa-phone' aria-hidden="true"></i>

                                </div>
                                <div className='text'>
                                    <h3>Phone</h3>
                                    <p>507-475-6094</p>
                                </div>
                            </div>

                            <div className='box'>
                                <div className='icon'>
                                    <i className='fa fa-envelope-o' aria-hidden="true"></i>
                                </div>
                                <div className='text'>
                                    <h3>Email</h3>
                                    <p>hrs_official@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className='contactForm'>
                            <form onSubmit={contactus}>
                                <h2>Send Message</h2>
                                <div className='inputBox'>
                                    <input type="text" name="" value={name}
                                        onChange={(e) => { setName(e.target.value) }}
                                        required="required" className="contact-input" />
                                    <span>Full Name</span>
                                </div>
                                <div className='inputBox'>
                                    <input type="text" name="" value={email}
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        required="required" className="contact-input" />
                                    <span>Email</span>
                                </div>
                                <div className='inputBox'>
                                    <textarea required="requred"
                                        onChange={(e) => { setMessage(e.target.value) }}
                                        value={message} className="contact-input"></textarea>
                                    <span>Type your message ...</span>
                                </div>
                                <div className='inputBox'>
                                {
                                    isLoading ? <div className='loader'><Loader /></div> 
                                    :
                                    <input type="submit" name="" value="Send" className="contact-input" />
                                }
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <MyFooter />
                <MyCopyright />
            </div>
            <Toast />
        </>
    )
}

export default Contact;















//  import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Contact = () => {
//   return (
//       <>
//        {/* NavBar */}
//        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//                 <a className="navbar-brand" href='#'>Navbar</a>
//                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse ">
//                     <ul className="navbar-nav">
//                         <li className="nav-item text-right">
//                             <NavLink className="nav-link" to="/landing">Home</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link " to="/about">About</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link " to="/contact">Contact</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link " to="/feedback">Feedback</NavLink>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="collapse navbar-collapse d-flex justify-content-end">
//                     <ul className="navbar-nav">
//                         <li className="nav-item text-right">
//                             <NavLink className="nav-link" to="/signup">Register</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link " to="/">Signin</NavLink>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>





//     <div>Contact</div>
//       </>
//   )
// }

// export default Contact;