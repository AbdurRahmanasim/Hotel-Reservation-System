import React, { useState } from 'react';
import MyFooter from './Footer';
import MyCopyright from './MyCopyright';
import Navbar from './Navbar';
import Toast from "../Components/Toast.jsx";
import { toast } from 'react-toastify';
import Loader from "../Components/Loader.jsx";
import axios from 'axios';

const Feedback = () => {

    const [username, setUsername] = useState("");
    const [feedback, setFeedback] = useState("");
    const [isLoading, setLoading] = useState(false);

    const [feedbackData, setFeedbackData] = useState([]);

    const sendFeedback = {
        username,
        feedback
    }


    const userFeedback = (e) => {

        e.preventDefault();

        setLoading(true)

        axios.post("http://localhost:5000/api/sendfeedback", sendFeedback)

            .then((res) => {

                toast.success("Thank you for your feedback.", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });

                setUsername("");
                setFeedback("");


                setLoading(false)

               

            })

            .catch( (err)=> {
                console.log(err)
                
            })


    };

    return (
        <>
            <Navbar />
            <h1 className='mt-5 text-center'> &#9997;	Our Customer's Feedback</h1>

            <div className="feedbackForm" style={{
                width: "50%",
                margin: "0px auto",
            }}>
                <div className="container mt-5">

                    <form onSubmit={userFeedback}>

                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text"
                                value={username}
                                onChange={(e) => { setUsername(e.target.value) }}
                                className="form-control" required />
                        </div>

                        <div className="form-group">
                            <label>Feedback</label>
                            <input
                                value={feedback}
                                onChange={(e) => { setFeedback(e.target.value) }}
                                type="text" className="form-control" required />
                        </div>

                        <div className="form-group">
                            <small className="form-text text-muted">Thank you very much for your time.We'll appreciate it.</small>
                        </div>

                        {
                            isLoading ? <Loader />
                                :
                                <button type="submit" className="btn btn-primary">Send</button>
                        }
                    </form>
                </div>
            </div>

            <MyFooter />
            <MyCopyright />

            <Toast />


        </>
    )
}

export default Feedback;
