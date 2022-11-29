import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MyFooter from './Footer';
import MyCopyright from './MyCopyright';
import Navbar from './Navbar';

const Orders = () => {

  const [userscontactdata, setContactData] = useState([]);

  const [search, setSearch] = useState("");



  useEffect(() => {

    axios.get("http://localhost:5000/api/bookingform")

      .then((res) => {

        // console.log(res);    
        setContactData(res.data)

      })

      .catch((err) => {
        console.log(err);
      })

  }, [])

  // const searchHandler = (e) => {
  //      e.preventDefault();
  //      console.log(search)
  //      axios.get(`http://localhost:5000/api/bookingform/${search}`)

  //      .then((res) => {
     
  //       setSearch(res.data)
 
  //      })
  // }


  return (
    <>
      <Navbar />

      <h1 className="text-center mt-5 alluserhead">BOOKINGS</h1>

      
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

     
      <table className="table table-striped container mt-5">
        <thead>
          <tr>
            <th>S.No.</th>
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
            userscontactdata.filter(item => {
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
                  <td>{val.cnic}</td>
                  <td>{val.address}</td>
                  <td>{val.contact}</td>
                  <td>{val.person}</td>
                  <td>{val.days}</td>
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



    </>
  )
}

export default Orders;