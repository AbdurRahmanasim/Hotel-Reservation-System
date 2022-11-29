import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar from './Navbar';
import Toast from "../Components/Toast.jsx";
import MyFooter from './Footer';
import MyCopyright from './MyCopyright';


const Checkout = () => {

    
  const [bank, setBank] = useState("");
  const [cardno, setCardno] = useState("");
  const [code, setCode] = useState("");
  const [expiry, setExpiry] = useState("");

    const Navigate = useNavigate();

    const checkout = (e) => {
        e.preventDefault();
        console.log(bank, cardno, code, expiry)
        toast.success("Checkout is done", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
        setTimeout(() => Navigate("/todo"), 2000)

    }
    return (
        <>
            <Navbar />
            {/* Heading */}
            <h1 className='text-center mt-5'>Checkout</h1>

            <div className="container">
                <hr />
            </div>

            <br />
            <br />

            {/* Booking Details Form */}

            <div className="container my-2">
                <form onSubmit={checkout}>
                    <div class="form-group">
                        <label for="inputState">Bank</label>
                        <select value={bank} onChange={(e)=> {setBank(e.target.value)}} class="form-control">
                            <option selected>Choose...</option>
                            <option value = "Meezan">Meezan</option>
                            <option value = "Al-Falah">Al-Falah</option>
                            <option value = "HBL">HBL</option>
                            <option value = "MCB">MCB</option>
                            <option value = "Summit">Summit</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Credit Card Number</label>
                        <input type="number"
                        value={cardno}
                        onChange={(e)=> {setCardno(e.target.value)}}
                        className="form-control" required />
                    </div>

                    <div className="form-group">
                        <label>CODE</label>
                        <input 
                        value={code}
                        onChange={(e)=> {setCode(e.target.value)}}
                        type="number" className="form-control" required />
                    </div>

                    <div className="form-group">
                        <label>Expiry Date</label>
                        <input type="date"
                        value={expiry}
                        onChange={(e)=> {setExpiry(e.target.value)}} className="form-control" required />
                    </div>

                    <div className="form-group">
                        <small id="emailHelp" className="form-text text-muted">We'll never share your details with anyone else.</small>
                    </div>

                    <button type="submit" className="btn btn-danger">Checkout</button>
                </form>
            </div>

            <MyFooter />
            <MyCopyright />

            <Toast />
        </>

    )
}

export default Checkout;