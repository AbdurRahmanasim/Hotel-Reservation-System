import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyFooter from './Footer';
import MyCopyright from './MyCopyright';
import { toast } from 'react-toastify';
import Toast from "../Components/Toast.jsx";
import axios from "axios";
import Navbar from "./Navbar";


const Booking = () => {

  const [bookingData, setBookingData] = useState([]);

  const [search, setSearch] = useState("");





  const user = localStorage.getItem("user");
  const getUserData = JSON.parse(user);

  useEffect(() => {
    axios.get("http://localhost:5000/api/bookingform")
    
      .then((res) => {

        console.log(res);
        // console.log()
        let filterOwner = res.data.filter( (item)=>{
          return item.book_id === getUserData._id;

      })  
        setBookingData(filterOwner)

        // setBookingData(res.data)
      
      })

      .catch((err) => {
        console.log(err);

      })

  }, [])

  // console.log(bookingData, "hghjg")





  const navigate = useNavigate();
  // const logout = () => {
  //   localStorage.removeItem("user");
  //   navigate("/");
  // };
  // const userProfile = () => {
  //   navigate("/profile");
  // }
  // const homeScreen = () => {
  //   navigate("/todo");
  // }
  // const bookingScreen = () => {
  //   navigate("/booking");
  // }

  const editBooking = () => {
    toast.success("Pending", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      });
  }

  const deleteBooking = () => {
    toast.success("Pending", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      });
  }

  return (
    <>

    <Navbar />
     

      {/* Heading */}
      <h1 className="text-center mt-5">👇 YOUR BOOKING HISTORY</h1>

      <hr className="container "/>

      {/* Show Booking Data */}
      {/* {
        bookingData.length === 0 ?

          <h1 className="text-center  mt-5">NO BOOKING DETAILS NOW</h1>

          : */}

          <form 
      className='container'>
        <div className="form-group">
          <input type="search" 
          className="form-control py-4"
          placeholder='&#9997; &nbsp; Search Records Here ....' 
          onChange={(e)=>setSearch(e.target.value)}
          />
        </div>
      </form>

      

      <table className="table table-striped container">
        <thead>
          <tr>
            <th>Name</th>
            <th>CNIC</th>
            <th>ADDRESS</th>
            <th>CONTACT NO.</th>
            <th>NO. OF PERSONS</th>
            <th>NO. OF DAYS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {
          bookingData.filter(item => {
              if(search === ""){
                return item;
              }else if(
                item.username.toLowerCase().includes(search.toLocaleLowerCase())   
              ){
                return item; 
              }
            }).map( (val, ind) => {
              return (
                <tr key={ind}>
                  <td>{val.username}</td>
                  <td>{val.cnic}</td>
                  <td>{val.address}</td>
                  <td>{val.contact}</td>
                  <td>{val.person}</td>
                  <td>{val.days}</td>
                  <td><button title="EDIT" onClick={editBooking} type="button" className="btn btn-success mx-1">EDIT</button>
                  <button title="DELETE" onClick={deleteBooking} type="button" className="btn btn-danger">DELETE</button></td>
                </tr>
              )
            })
          }
              
        </tbody>
      </table>

 


<br />
<br />



{/* Footer */}
       <MyFooter  />
        <MyCopyright />

        <Toast/>
      
    </>
  )

};

export default Booking;