import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { createGlobalStyle } from 'styled-components';
import MyFooter from './Footer';
import MyCopyright from './MyCopyright';
import Navbar from './Navbar';

const AdminAuth = () => {

    const [search, setSearch] = useState("");

    const [refresh, setRefresh] = useState(false);

    const [allrequests, setAllReq] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:5000/api/getrequest")

            .then((res) => {

                // console.log(res);    
                setAllReq(res.data)

            })

            .catch((err) => {
                console.log(err);
            })

    }, [refresh]);
    
    const deleteRequest = (id) => {

        axios.delete(`http://localhost:5000/api/deleterequest/${id}`)
        .then((res) => {
            console.log(res.data);
            // setAllReq(res.data)  delete karte waqt res nahi bhejna warna map/filter is not a fun err ayega
            setRefresh(!refresh)
            toast.success('Request is deleted Successfully.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });

        })
        .catch((err) => {
            console.log(err)
        })
      
       
    }


    return (
        <>
            <Navbar />

            <h1 className='mt-5 text-center alluserhead'>Hotel Owner Request</h1>

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
                        <th>Hotel Owner</th>
                        <th>Email Address</th>
                        <th>Reason</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allrequests.filter((item) => {
                            if (search === "") {
                                return item;
                            } else if (
                                item.ownername.toLowerCase().includes(search.toLocaleLowerCase())
                            ) {
                                return item;
                            }
                        }).map((val, ind) => {
                            {/* console.log(val.ownername) */}
                            return (

                                <tr key={ind}>
                                    <td>{ind + 1}</td>
                                    <td>{val.ownername}</td>
                                    <td>{val.owneremail}</td>
                                    <td>{val.reason}</td>
                                    <td>
                                        <button
                                            title="DELETE"
                                            onClick={(e) => deleteRequest(val._id)}
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


            <MyFooter />
            <MyCopyright />
        </>
    )
}

export default AdminAuth;