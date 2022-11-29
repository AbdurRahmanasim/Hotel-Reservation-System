import React, { useState } from 'react';
import hotel1 from '../Assets/h.jpg';
import '../Styles/Booknow.css';
import Navbar from "../Components/Navbar";
import MyFooter from './Footer';
import MyCopyright from './MyCopyright';
import Toast from "../Components/Toast.jsx";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from "../Components/Loader";

export default function Booknow() {

  const [username, setUsername] = useState("");
  const [cnic, setCnic] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [person, setPerson] = useState("");
  const [days, setDays] = useState("");

  const [loader, setLoader] = useState(false);

  const user = localStorage.getItem("user");
  const getUserData = JSON.parse(user);


  const bookingformObj = {
    username,
    cnic,
    address,
    contact,
    person,
    days,
    book_id: getUserData._id
  };
  const Navigate = useNavigate();

  const bookNow = (e) => {
    e.preventDefault();

    setLoader(true)
    // console.log(username, cnic, address, contact, person, days)
    if (!username, !cnic, !address, !contact, !person, !days) {
      toast.error("Fields can't be empty", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else {

      axios.post("http://localhost:5000/api/bookingform", bookingformObj)

        .then((res) => {
          console.log(res);

          toast.success("Hotel Resevation Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => Navigate("/checkout"), 2000)



          console.log(getUserData._id)
          // setHotelDataList(filterOwner)  
          setLoader(false)
        })
        .catch((err) => {
          console.log(err);
          setLoader(false)


        });

    }
  }

  return (
    <>
      <Navbar />

      <div className="container my-5">
        <div className="row">
          <div className="col-md-10 mx-auto col-12  shadow-lg border-0 p-4">
            <div>
              <h1 className="display-4 booking-hd">Booking</h1>
            </div>
            <div className="row">
              <div className="col-md-6 col-12 my-auto">
                <img
                  src={hotel1}
                  className="img-fluid"
                  alt="selected room"
                />
              </div>
              <div className="col-md-6 col-12 my-auto">
                <h1>Rooms Details</h1>
                <table className="table">
                  <thead className="thead-light">
                    <tr>
                      <th className="dark-shade">Room Type</th>
                      <td>presidential</td>
                    </tr>
                    <tr>
                      <th className="dark-shade">Capacity</th>
                      <td>4 persons</td>
                    </tr>
                    <tr>
                      <th className="dark-shade">Size</th>
                      <td>1000 sqft</td>
                    </tr>
                    <tr>
                      <th className="dark-shade">Breakfast</th>
                      <td>included</td>
                    </tr>
                    <tr>
                      <th className="dark-shade">Pets</th>
                      <td>not allowed</td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-12">
                <h6 className="font-weight-bolder">
                  Please! co-operate with us
                </h6>
                <mark>Please make sure Checkin time is from 9 am to 12 pm</mark>
              </div>
              <div className="col-md-6 col-12">
                <h6 className="font-weight-bold">
                  Price per day :{" "}
                  <span className="">Rs: $50 </span>
                </h6>
                <h6 className="font-weight-bold">
                  Total Price to be paid :{" "}
                  <span className="text-primary">Rs: $550</span>
                </h6>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-md-12 col-12 my-auto">
                <div className="col-md-12 col-12 float-right">



                  {/*-------------Form---------------*/}
                  <form >
                    <div className="form-group">
                      <label>Username</label>
                      <input
                        type="text"
                        value={username}
                        className="form-control"
                        onChange={(e) => { setUsername(e.target.value) }}
                        placeholder="Enter your username"
                        required
                      />

                      <br />
                      <label>CNIC</label>
                      <input
                        type="number"
                        className="form-control"
                        value={cnic}
                        onChange={(e) => { setCnic(e.target.value) }}
                        placeholder="Enter your CNIC"
                        required
                      />
                      <br />
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        value={address}
                        onChange={(e) => { setAddress(e.target.value) }}
                        placeholder="Enter your address"
                        required
                      />
                      <br />



                      <label htmlFor="contact">Contact Number</label>
                      <input
                        type="number"
                        className="form-control"
                        value={contact}
                        onChange={(e) => { setContact(e.target.value) }}
                        required
                        placeholder="Enter contact details"

                      />
                      <br />


                      <label for="inputState">No of Persons</label>
                      <select value={person} onChange={(e) => { setPerson(e.target.value) }} class="form-control">
                        <option selected>Choose...</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>

                      <br />
                      <label for="inputState">No of Days To Stay</label>
                      <select value={days} onChange={(e) => { setDays(e.target.value) }} class="form-control">
                        <option selected>Choose...</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                      </select>
                      <br />

                    </div>

                    <div className="form-group form-check"></div>
                  </form>
                  <center>
                   {
                    loader ? <Loader /> :
                    <button onClick={bookNow}
                      className="btn btn-block btn-outline-primary confirm-booking-btn"
                    >
                      Confirm Booking
                    </button>
                   }
                  </center>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>



      <Toast />

      <MyFooter />
      <MyCopyright />

    </>

  )
}

// export default BookingForm;