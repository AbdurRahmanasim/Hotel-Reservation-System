import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Image1 from "../Assets/l1.jpg";
import Image3 from "../Assets/12.jpg";
import Image2 from "../Assets/l3.jpg";
import MyFooter from './Footer';
import MyCopyright from './MyCopyright';
import Navbar from './Navbar';
import Toast from "../Components/Toast.jsx";
import '../Styles/MyCards.css';
// import AOS from 'aos';
import 'aos/dist/aos.css';
import GetFeedback from './GetFeedback';
// import Feedback from './Feedback';


const LandingPage = () => {

    // Filter
    const [searchroomType, setSearchRoomType] = useState("");
    const [searchPrice, setSearchPrice] = useState("");

    const [refresh, setRefresh] = useState(false)

    const [HotelDataList, setHotelDataList] = useState([]);


    const navigate = useNavigate();

    // Fetch All Data and display
    useEffect(() => {
        axios.get("http://localhost:5000/api/todo/getHotel")

            .then((res) => {
                // console.log(res.data, "res")
                setHotelDataList(res.data)

            })

            .catch((err) => {
                console.log({ msg: " ERROR" })
            })
    }, [refresh]);


    //  Local Storage

    const user = localStorage.getItem("user");

    const getUserData = JSON.parse(user);





    const bookNow = () => {
        if (!getUserData) {
            toast.error("Please! Login yousrelf", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        }
        else if (getUserData.role === "User") {
            navigate("/bookingform")
            setRefresh(true)
            setRefresh(true)
        }
        else {
            toast.error("Sorry! Hotel Owner can't book.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            setRefresh(true)
        }
    }




    const filterRooms = (e) => {
        e.preventDefault();

        console.log(searchroomType, searchPrice)

        setSearchRoomType("")

        setSearchPrice("")


        console.log(searchroomType)
        const filterItems = HotelDataList.filter((val, ind) => {
            return val.roomType === searchroomType
        })
        setHotelDataList(filterItems);

        axios.get("http://localhost:5000/api/todo/getHotel")

            .then((res) => {
                const filterItems = res.data.filter((val) => {
                    return val.roomType === searchroomType
                })
                setHotelDataList(filterItems)
            })

            .catch((err) => {
                console.log(err)
            })

        if (searchroomType === "ALL") {

            axios.get("http://localhost:5000/api/todo/getHotel")

                .then((res) => {
                    // console.log(res.data, "res")
                    setHotelDataList(res.data)
                })

        }
    }








    return (
        <>

            <Navbar />

            {/* Crousel */}
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Image1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Image2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Image3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </button>
            </div>

            {/* Filteration Fields */}
            <div className="container">
                <form
                    onSubmit={filterRooms}
                    className="form-inline my-5 d-flex justify-content-center">
                    <select
                        value={searchroomType}
                        onChange={(e) => setSearchRoomType(e.target.value)}
                        className="form-control mx-2 mb-2">
                        <option selected>Choose Room Types...</option>
                        <option value="ALL">ALL</option>
                        <option value="Single Room">Single Room</option>
                        <option value="Double Room">Double Room</option>
                        <option value="Family Room">Family Room</option>
                        <option value="Presedential Room">Presedential Room</option>
                    </select>

                    <select
                        value={searchPrice}
                        onChange={(e) => setSearchPrice(e.target.value)}
                        className="form-control mx-2 mb-2">
                        <option selected>Choose Prices...</option>
                        <option value="ALL">ALL</option>
                        <option value="$200-$400">$200-$400</option>
                        <option value="$500-$1000">$500-$1000</option>
                        <option value="$1200-$1500">$1200-$1500</option>
                        <option value="$2000-$2500">$2000-$2500</option>
                    </select>

                    <button type="submit" className="btn btn-primary mb-2 mx-1">Search</button>
                </form>
            </div>


            <div className="container text-center" data-aos="fade-down">
                <h1>FEATURED ROOMS</h1>
            </div>


            {/* Cards  */}

            <div className="container">
                <div className="row d-flex justify-content-center" >


                    {
                        HotelDataList.map((val, ind) => {
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
                                            <button
                                                onClick={bookNow}
                                                className="btn btn-danger  mb-5 text-center">
                                                Book Now</button>


                                        </div>
                                    </div>
                                </div>

                            )
                        })


                    }

                </div>
            </div>

            {/* Feedback */}
             <GetFeedback /> 
             
           

            {/* Footer */}

            <MyFooter />
            <MyCopyright />

            {/* AOS.init(); */}



            <Toast />



        </>
    )
};
export default LandingPage;