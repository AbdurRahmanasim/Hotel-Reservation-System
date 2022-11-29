import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Toast from './Toast';
import MyFooter from './Footer';
import MyCopyright from './MyCopyright';
import Navbar from './Navbar';
import Loader from "../Components/Loader.jsx";
import { FaPlus } from 'react-icons/fa';

const AdminDashboard = () => {
    const [roomType, setRoomType] = useState("");
    const [price, setPrice] = useState("");
    const [images, setImages] = useState("");
    const [hotelDataList, setHotelDataList] = useState([]);

    const [loader, setLoader] = useState(false);


    // Filter
    // const [searchroomType, setSearchRoomType] = useState("");


    const [refresh, setRefresh] = useState(false)


    const user = localStorage.getItem("user");

    const getUserData = JSON.parse(user);

    // const modalHandler = () => {

    //     setModalState(!modalState);
    // }




    // Fetch All Data and display
    useEffect(() => {
        axios.get("http://localhost:5000/api/todo/getHotel")

            .then((res) => {
                // console.log(res.data, "res")

                let filterOwner = res.data.filter((item) => {
                    console.log(item.ownerId, getUserData._id)
                    return item.ownerId === getUserData._id;


                })

                console.log(getUserData._id)
                setHotelDataList(filterOwner)


                // setHotelDataList(res.data)
            })

            .catch((err) => {
                console.log({ msg: " ERROR" })
            })
    }, [refresh])


    const adminObj = {
        roomType,
        price,
        images,
        ownerId: getUserData._id
    }

    const bookingHandler = (e) => {

        e.preventDefault();

        // console.log(adminObj)

        setLoader(true)


        axios.post("http://localhost:5000/api/todo/add", adminObj)

            .then((res) => {

                console.log(res)

                toast.success('Room is Created successfully', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });

                setRefresh(!refresh)

                setLoader(false)

            })

            .catch((err) => {
                console.log({ msg: " ERROR" })
                setLoader(false)

            })
    }


    // Delete HOtel
    const deleteHotel = (id) => {
        // alert(id)

        axios.delete(`http://localhost:5000/api/todo/deletehotel/${id}`)
            .then((res) => {
                console.log(res.data);
                const deleteHotel = hotelDataList.filter((item, ind) => {
                    // console.log(item, ind)  
                    return ind !== id // jo id or ind match na kre wo return kardo
                });

                setHotelDataList(deleteHotel);
                setRefresh(!refresh)
                toast.success('Room is deleted successfully.', {
                    position: "top-right",
                    autoClose: 3000,
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



    // Edit HOtel
    const editHotel = (id) => {

        // console.log(id)


        let roomType = prompt("Enter Room Type (Single Room, Double Room, Family Room, Presedential Room");

        let price = prompt("Enter Room Price");

        let image = prompt("Edit Room image")

        const editDetails = {
            roomType,
            price,
            image

        }

        // console.log(editDetails)



        axios.put(`http://localhost:5000/api/todo/edithotel/${id}`, editDetails)
            .then((res) => {

                console.log(res.data);

                toast.success('Room details are edited successfully', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });



                setRefresh(!refresh)

            })

            .catch((err) => {
                console.log(err)
            })
    }


    // const filterRooms = (e) => {
    //     e.preventDefault();
    //     // console.log(searchroomType)
    //     const filterItems = hotelDataList.filter((val, ind) => {
    //         return val.roomType === searchroomType
    //     })
    //     setHotelDataList(filterItems);

    //     axios.get("http://localhost:5000/api/todo/getHotel")

    //         .then((res) => {
    //             const filterItems = res.data.filter((val) => {
    //                 return val.roomType === searchroomType
    //             })
    //             setHotelDataList(filterItems)
    //         })

    //         .catch((err) => {
    //             console.log(err)
    //         })

    //     if (searchroomType === "ALL") {

    //         axios.get("http://localhost:5000/api/todo/getHotel")

    //             .then((res) => {
    //                 // console.log(res.data, "res")
    //                 setHotelDataList(res.data)
    //             })

    //     }
    // }


    return (
        <>

            <Navbar />
            {/* <AdminNavbar /> */}

            <div className='text-right mx-3 mt-4' >
                <button type="button" data-toggle="modal" data-target="#exampleModal"
                    className="btn btn-primary text-center my-3 mx-4 py-2"
                >
                    <FaPlus />
                </button>
            </div>


            {/* Filteration Fields */}
            {/* <div classNameName="container">
                <form
                    onSubmit={filterRooms}
                    className="form-inline my-5 d-flex justify-content-center">
                    <select
                        value={searchroomType}
                        onChange={(e) => setSearchRoomType(e.target.value)}
                        className="form-control"
                        style={{
                            width: "300px",
                            height: "40px"

                        }}
                    >
                        <option selected>Select Room Type ...</option>
                        <option value="Single Room">Single Room</option>
                        <option value="Double Room">Double Room</option>
                        <option value="Family Room">Family Room</option>
                        <option value="Presedential Room">Presedential Room</option>

                    </select>
                    <button
                        style={{
                            width: "70px",
                            height: "37px",


                        }}
                        type="submit" className="btn btn-primary mx-2">Search</button>
                </form>
            </div> */}










            {/* MODAL FORM */}


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title"> ADD HOTELS</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={bookingHandler}>
                                <div className="form-group">
                                    <label>ROOM TYPE</label>
                                    <select
                                        value={roomType}
                                        onChange={(e) => setRoomType(e.target.value)}
                                        className="form-control">
                                        <option>Choose...</option>
                                        <option value="Single Room">Single Room</option>
                                        <option value="Double Room">Double Room</option>
                                        <option value="Family Room">Family Room</option>
                                        <option value="Presedential Room">Presedential Room</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label >PRICE</label>
                                    <input type="text"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        className="form-control" />
                                </div>

                                <div className="form-group">
                                    <label >IMAGES</label>
                                    <input type="text"
                                        value={images}
                                        onChange={(e) => setImages(e.target.value)}
                                        className="form-control" />
                                </div>

                                {
                                    loader ? <Loader />

                                        :

                                        <button type="submit" className="btn btn-primary">Submit</button>

                                }

                                <button type="button" className="btn btn-danger mx-2" data-dismiss="modal">Close</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>




            {/* <MyCards /> */}


            <div className="container">
                <div className="row d-flex justify-content-center">


                    {
                        hotelDataList.map((val, ind) => {
                            return (
                                <div className="card" key={ind}>
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <img src={val.images} />
                                                {/* <i className="fa fa-user-circle" aria-hidden="true"></i> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content text-center">
                                            <h3 className='mt-3'>
                                                {val.roomType}
                                            </h3>
                                            {/* <Link to={`/singleRoom/single`} className='links'> */}
                                            <p className="my-1">Click to book your room of your own choice </p>
                                            {/* </Link> */}
                                            <h3>${val.price}</h3>
                                            {/* ------------------------- */}
                                            <button
                                                onClick={(e) => editHotel(val._id)}
                                                className="btn btn-success mb-4">EDIT</button>


                                            <button
                                                onClick={(e) => deleteHotel(val._id)}
                                                className="btn btn-danger mx-2 mb-4">DELETE</button>


                                        </div>
                                    </div>
                                </div>








                            )
                        })


                    }

                </div>
            </div>




            <MyFooter />
            <MyCopyright />


            <Toast />
        </>
    )
}

export default AdminDashboard;