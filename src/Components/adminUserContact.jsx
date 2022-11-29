import React, { useEffect, useState } from 'react';
import MyFooter from './Footer';
import MyCopyright from './MyCopyright';
import Navbar from './Navbar';
import Toast from './Toast';
import { toast } from 'react-toastify';
import axios from 'axios';
import "../Styles/AllUsers.css"



const AdminUserContact = () => {

  const [userscontactdata, setContactData] = useState([]);
  const [refresh, setrefresh] = useState(false)

  const [search, setSearch] = useState("");


  useEffect(() => {

    axios.get("http://localhost:5000/api/getcontact")

      .then((res) => {

        // console.log(res);    
        setContactData(res.data)

      })

      .catch((err) => {
        console.log(err);
      })

  }, [refresh])

  const deleteContact = (id) => {

    // alert("deleted")

    axios.delete(`http://localhost:5000/api/deletecontact/${id}`)

      .then((res) => {

        console.log(res.data)

        const deletecontactdata = userscontactdata.filter((item, ind) => {
          // console.log(item, ind)  
          return ind !== id // jo id or ind match na kre wo return kardo
        });

        setContactData(deletecontactdata);

        toast.success("Message is deleted Successfuly..", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });

        setrefresh(!refresh)

      })


      .catch((err) => {
        console.log(err)
        setrefresh(!refresh)
      })




  }



  return (
    <>
      <Navbar />
      <h1 className="text-center mt-5 alluserhead">Contact Details</h1>

      <form
        className='container'>
        <div className="form-group">
          <input type="search"
            className="form-control py-4"
            placeholder='&#9997; &nbsp; Search Records ....'
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>

      <table className="table table-striped container">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Email Address</th>
            <th>Message</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            userscontactdata.filter(item => {
              if (search === "") {
                return item;
              } else if (
                item.name.toLowerCase().includes(search.toLocaleLowerCase())
              ) {
                return item;
              }
            }).map((val, ind) => {
              return (
                <tr key={ind}>
                  <td>{ind + 1}</td>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>{val.message}</td>
                  <td>
                    <button
                      title="BLOCK"
                      onClick={(e) => deleteContact(val._id)}
                      type="button" className="btn btn-danger blockBtn">
                      DELETE
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

export default AdminUserContact;