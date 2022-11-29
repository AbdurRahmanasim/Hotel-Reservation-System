import React, { useState } from 'react';
import MyFooter from './Footer';
import MyCopyright from './MyCopyright';
import Navbar from './Navbar';
import Toast from './Toast';
import { toast } from 'react-toastify';
import axios from 'axios';
import Loader from './Loader';


const OwnerRequest = () => {
    const [ownername, setownername] = useState("");
    const [reason, setReason] = useState("");
    const [owneremail, setOwneremail] = useState("");


    const [isLoading, setLoading] = useState(false);

    const sendRequest = {
        ownername,
        owneremail,
        reason,
    }


    const userRequest = (e) => {

        e.preventDefault();

        setLoading(true)

        axios.post("http://localhost:5000/api/sendrequest", sendRequest)

            .then((res) => {

                toast.success("Admin has received your request.", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });

              
                setownername("");
                setReason("");
                setOwneremail("");


                setLoading(false)

               

            })

            .catch( (err)=> {
                console.log(err)
                
            })


    };

    return (
        <>
            <Navbar />

            <h1 className='mt-5 text-center'> &#128591;	Hotel Owner Request</h1>

            <div className="feedbackForm" style={{
                width: "50%",
                margin: "0px auto",
            }}>
                <div className="container mt-5">

                    <form onSubmit={userRequest}>

                        <div className="form-group">
                            <label>Hotel Owner</label>
                            <input type="text"
                                value={ownername}
                                onChange={(e) => { setownername(e.target.value) }}
                                className="form-control" required />
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="text"
                                value={owneremail}
                                onChange={(e) => { setOwneremail(e.target.value) }}
                                className="form-control" required />
                        </div>
                        <div className="form-group">
                            <small className="form-text text-muted">Email Address should be used which is already registered.</small>
                        </div>

                        <div className="form-group">
                            <label>Reason</label>
                            <input
                                value={reason}
                                onChange={(e) => { setReason(e.target.value) }}
                                type="text" className="form-control" required />
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

export default OwnerRequest;