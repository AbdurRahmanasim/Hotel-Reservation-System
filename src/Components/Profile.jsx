import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import userProfile from "../Assets/profile.jpg";
import "../Styles/Profile.css";
import { toast } from 'react-toastify';
import Toast from "../Components/Toast.jsx";
import MyFooter from './Footer';
import MyCopyright from './MyCopyright';


const Profile = () => {
  const [username , setUsername] = useState("");
  const [email , setEmail] = useState("");
  const [contact , setContact] = useState("");
  const [role, setRole] = useState("");

   

    const user = localStorage.getItem("user");

    const getUserData = JSON.parse(user);

  const editProfile = () => {
    let username = prompt("Change your Username");
    let email = prompt("Change your Email Address");
    let contact = prompt("Change your Contact");
    let role = prompt("Change your Role");


    setUsername(username);
    setEmail(email);
    setContact(contact);
    setRole(role);

    // console.log(username, email, contact)

    toast.success("Yor Profile is edited", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      });
  };

  // useEffect( ()=>{
  //   if(username, email, contact){
  //     getUserData=[]
  //   }
  // }, [])


  return (
      <>

       <Navbar />

        <div className="container my-5 d-flex justify-content-center">
        <div className="profileBox text-center">
        <div className="container ">
          <div className="card" style={{ width: "18rem" }}>
            <img src={userProfile} className="card-img-top" alt="Profile" />
            <div class="card" style={{ width: "17.4rem" }}>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><b>Name: </b>{(!username) ? getUserData.username : username} </li>
                <li class="list-group-item"><b>Email: </b> {(!email) ? getUserData.email : email}</li>
                <li class="list-group-item"><b>Role: </b>{(!role) ? getUserData.role : role}</li>
                <li class="list-group-item"><b>Contact: </b>{(!contact) ? getUserData.contact : contact}</li>
                <button onClick={editProfile} type="button" class="btn btn-success">Edit Profile</button>
              </ul>
            </div>
          </div>
        </div>
      </div>
        </div>


        <MyFooter />
      <MyCopyright />

      <Toast />

      </>
  )
}

export default Profile;