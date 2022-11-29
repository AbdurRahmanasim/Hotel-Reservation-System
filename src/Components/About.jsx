import React from 'react'
import '../Styles/About.css'
import hotelVideo from '../Assets/video.mp4'
import { Link, NavLink } from 'react-router-dom'
import MyFooter from '../Components/Footer'
import MyCopyright from '../Components/MyCopyright'
import Navbar from './Navbar'


const About = () => {

    return (

        <>

<Navbar />
            
           

    {/* Video */}
      <div>
        <section className="heading">
            <video autoPlay loop className="video-background" muted plays-inline>
                <source src={hotelVideo} type="video/mp4" />
            </video>

            <center>
            <div className="welcome-msg ">
                <h1> About HRS Hotel </h1>
                    <p>
                    HRS Hotels, is an Indian hospitality chain of leased and franchised hotels, homes and living spaces.
                    Founded in 2020 by Vineet Kumar, SNG initially consisted mainly of budget hotels. The startup expanded
                    globally with thousands of hotels, vacation homes and millions of rooms in India, Malaysia, UAE, Nepal, China,
                    Brazil, Mexico, UK, Philippines, Japan, Saudi Arabia, Sri Lanka, Indonesia, Vietnam, the United States and mor
                    Nestled beside an 18-hole golf course minutes from the slopes, Hotel Park City is consistently acclaimed among the best hotels
                    in Park City, Utah. Among our most recent accolades, our AAA Four Diamond resort has proudly been rated a “Top Ski Hotel” by Conde
                    Nast Traveler, and our Ruth’s Chris Steak House is the #1 rated Ruth’s Chris Steak House in the western U.S.
                    </p>

                    <Link to="/bookingform"> <a className="btn btn-book btna"> Book Room </a> </Link>
                    <Link to="/landing"> <a className="btn btn-home btna"> Return to Home</a></Link>
            </div>
            </center>
        </section>


            <MyFooter />
            <MyCopyright />

    </div>

    </>

    );
};

export default About;
