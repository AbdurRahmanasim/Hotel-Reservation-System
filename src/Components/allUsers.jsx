import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MyFooter from './Footer';
import MyCopyright from './MyCopyright';
import Navbar from './Navbar';
import Toast from './Toast';
import { toast } from 'react-toastify';
import "../Styles/AllUsers.css"


const Users = () => {

  const [allUsers, setAllUsers] = useState([]);
  // const [unblock, setUnblock] = useState("BLOCK")

  const [search, setSearch] = useState("");


  const user = localStorage.getItem("user");
  const getUserData = JSON.parse(user);



  useEffect(() => {

    axios.get("http://localhost:5000/api/signup/getusers")

      .then((res) => {

        // console.log(res);    
        setAllUsers(res.data)

      })

      .catch((err) => {
        console.log(err);
      })

  }, [])

  const blockUser = () => {

    // setUnblock("UNBLOCK");

    toast.success("User is Blocked Successfuly..", {
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

      <h1 className="text-center mt-5 alluserhead">HOTEL OWNERS AND USERS</h1>

      <form 
      className='container'>
        <div className="form-group">
          <input type="search" 
          className="form-control py-4"
          placeholder='&#9997; &nbsp; Search Records ....' 
          onChange={(e)=>setSearch(e.target.value)}
          />
        </div>
      </form>

      <table className="table table-striped container">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Full Name</th>
            <th>Email Address</th>
            <th>Contact no</th>
            <th>Role</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { 
            allUsers.filter(item => {
              if(search === ""){
                return item;
              }else if(
                item.username.toLowerCase().includes(search.toLocaleLowerCase())
              ){
                return item; 
              }
            }).map((val, ind) => {
              return (
               
               <tr key={ind}>
                  <td>{ind + 1}</td>
                  <td>{val.username}</td>
                  <td>{val.email}</td>
                  <td>{val.contact}</td>
                  <td>{val.role}</td>
                  <td>
                    <button
                      title="BLOCK"
                      onClick={blockUser}
                      type="button" className="btn btn-danger blockBtn">
                     BLOCK
                    </button>
                  </td>
                </tr>
              
              )
              
              
            })

          
          }

        </tbody>
      </table>

<br />
      {/* Footer */}
      <MyFooter />
      <MyCopyright />

      <Toast />

    </>
  )
}

export default Users;

{/* val.role == "Hotel Owner" &&  */}