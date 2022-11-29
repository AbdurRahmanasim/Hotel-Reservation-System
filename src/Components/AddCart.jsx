import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../App.css";
// import Navbar from './Navbar';
import Footer from "../Components/Footer.jsx";
import MyCopyright from './MyCopyright';
import card1 from '../Assets/card1.jpg';
import card5 from '../Assets/card5.jpg';
import card3 from '../Assets/card3.jpg';
import card2 from '../Assets/card2.jpg';
import card15 from '../Assets/card15.jpg';
import card13 from '../Assets/card13.jpg';
import '../Styles/MyCards.css';
import Navbar from "../Components/Navbar";


const Todo = () => {

    const [inputVal, setInputVal] = useState("");
    const [todo, setTodo] = useState([]);
    const [indVal, setIndVal] = useState("");
    const [updVal, setUpdVal] = useState("");
    const [items, setItems] = useState([]);

    const navigate = useNavigate();


    const user = localStorage.getItem("user");

    const getUserData = JSON.parse(user);


    const bookHotel = () => {
        navigate("/bookingform")
    }

    const addTodo = () => {

        if (!inputVal) {
            alert("Enter todo");
        }

        else {
            setTodo([...todo, inputVal]);
            setInputVal("")
        };

    };

    const DeleteAll = () => {
        setTodo([]);
    }

    const DeleteOne = (id) => {
        const updatedTodo = todo.filter((val, ind) => {
            return ind !== id
        })
        setTodo(updatedTodo)
    };

    const Edit = (ind) => {
        setIndVal(ind)
    };

    const updateTodo = (id) => {
        if (!updVal) {
            alert("enter updated todo")
        } else {
            todo.splice(indVal, 1, updVal)
            setTodo([...todo])
            setIndVal("")
            setUpdVal("")
        }
    }

    const logout = () => {
        localStorage.removeItem("user");
        navigate("/");
    }


  


    useEffect(() => {
        if (!user) {
            navigate("/", { replace: true });
        } else {
            navigate("/todo");
            setItems(getUserData);
        }
    }, []);






    return (
        <>
        <Navbar />
      
            {/* <Navbar /> */}

            {/* ----------------------- */}
            <div className="container">
                <center>
                    <h1 className='featured-heading'> Featured Rooms  </h1>
                </center>
                <div className='myCards'>

                    {/* SINGLE */}
                    <div className="card ">

                        <div className="slide slide1">

                            <div className="content">

                                <div className="icon">
                                    <img src={card1} />

                                    {/* <i className="fa fa-user-circle" aria-hidden="true"></i> */}

                                </div>

                            </div>

                        </div>

                        <div className="slide slide2">

                            <div className="content">

                                <h3>

                                    Single Room

                                </h3>
                                {/* <Link to={`/singleRoom/single`} className='links'> */}
                                <p>Click to book your room of your own choice </p>
                                {/* </Link> */}

                                <h3 className='text-center mt-2'>$200</h3>

                                <div className='container text-center mb-3'>
                                    <button onClick={bookHotel} type="button" className="btn btn-danger mt-2 mb-3">BOOK NOW</button>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* FAMILY */}
                    <div class="card ">

                        <div class="slide slide1">

                            <div class="content">

                                <div class="icon">
                                    <img src={card5} />

                                    {/* <i class="fa fa-user-circle" aria-hidden="true"></i> */}

                                </div>

                            </div>

                        </div>

                        <div class="slide slide2">

                            <div class="content">

                                <h3>

                                    Family Room
                                </h3>
                                {/* <Link to={`/singleRoom/family`} className='links'> */}
                                <p>Click to book your room of your own choice </p>
                                {/* </Link> */}
                                <h3 className='text-center mt-2'>$400</h3>

                                <div className='container text-center mb-3'>
                                    <button onClick={bookHotel} type="button" className="btn btn-danger mt-2 mb-3">BOOK NOW</button>
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* PRES */}
                    <div class="card">

                        <div class="slide slide1">

                            <div class="content">

                                <div class="icon">
                                    <img src={card3} />

                                    {/* <i class="fa fa-user-circle" aria-hidden="true"></i> */}

                                </div>

                            </div>

                        </div>

                        <div class="slide slide2">

                            <div class="content">

                                <h3>

                                    Presedential Room

                                </h3>
                                {/* <Link to={`/singleRoom/presidential`} className='links'> */}
                                <p>Click to book your room of your own choice </p>
                                {/* </Link> */}
                                <h3 className='text-center mt-2'>$600</h3>

                                <div className='container text-center mb-3'>
                                    <button onClick={bookHotel} type="button" className="btn btn-danger mt-2 mb-3">BOOK NOW</button>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* DOUBLE */}
                    <div class="card ">

                        <div class="slide slide1">

                            <div class="content">

                                <div class="icon">
                                    <img src={card2} />

                                    {/* <i class="fa fa-user-circle" aria-hidden="true"></i> */}

                                </div>

                            </div>

                        </div>

                        <div class="slide slide2">

                            <div class="content">

                                <h3>

                                    Double Room

                                </h3>
                                {/* <Link to={`/singleRoom/double`} className='links'> */}
                                <p>Click to book your room of your own choice </p>
                                {/* </Link> */}

                                <h3 className='text-center mt-2'>$1000</h3>

                                <div className='container text-center mb-3'>
                                    <button onClick={bookHotel} type="button" className="btn btn-danger mt-2 mb-3">BOOK NOW</button>
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* SINGLE */}
                    <div class="card ">

                        <div class="slide slide1">

                            <div class="content">

                                <div class="icon">
                                    <img src={card15} />

                                    {/* <i class="fa fa-user-circle" aria-hidden="true"></i> */}

                                </div>

                            </div>

                        </div>

                        <div class="slide slide2">

                            <div class="content">

                                <h3>

                                    Single Room

                                </h3>
                                {/* <Link to={`/singleRoom/single`} className='links'> */}
                                <p>Click to book your room of your own choice </p>
                                {/* </Link> */}

                                <h3 className='text-center mt-2'>$800</h3>

                                <div className='container text-center mb-3'>
                                    <button onClick={bookHotel} type="button" className="btn btn-danger mt-2 mb-3">BOOK NOW</button>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* FAMILY */}
                    <div class="card ">

                        <div class="slide slide1">

                            <div class="content">

                                <div class="icon">
                                    <img src={card13} />

                                    {/* <i class="fa fa-user-circle" aria-hidden="true"></i> */}

                                </div>

                            </div>

                        </div>

                        <div class="slide slide2">

                            <div class="content">

                                <h3>

                                    Family Room

                                </h3>
                                {/* <Link to={`/singleRoom/family`} className='links'> */}
                                <p>Click to book your room of your own choice </p>
                                {/* </Link> */}

                                <h3 className='text-center mt-2'>$400</h3>

                                <div className='container text-center mb-3'>
                                    <button onClick={bookHotel} type="button" className="btn btn-danger mt-2 mb-3">BOOK NOW</button>
                                </div>

                            </div>

                        </div>







                    </div>



                    {/* FAMILY */}
                    <div class="card ">

                        <div class="slide slide1">

                            <div class="content">

                                <div class="icon">
                                    <img src={card5} />

                                    {/* <i class="fa fa-user-circle" aria-hidden="true"></i> */}

                                </div>

                            </div>

                        </div>

                        <div class="slide slide2">

                            <div class="content">

                                <h3>

                                    Family Room

                                </h3>
                                {/* <Link to={`/singleRoom/family`} className='links'> */}
                                <p>Click to book your room of your own choice </p>
                                {/* </Link> */}

                                <h3 className='text-center mt-2'>$700</h3>

                                <div className='container text-center mb-3'>
                                    <button onClick={bookHotel} type="button" className="btn btn-danger mt-2 mb-3">BOOK NOW</button>
                                </div>

                            </div>

                        </div>







                    </div>


                    {/* FAMILY */}
                    <div class="card ">

                        <div class="slide slide1">

                            <div class="content">

                                <div class="icon">
                                    <img src={card3} />

                                    {/* <i class="fa fa-user-circle" aria-hidden="true"></i> */}

                                </div>

                            </div>

                        </div>

                        <div class="slide slide2">

                            <div class="content">

                                <h3>

                                    Family Room

                                </h3>
                                {/* <Link to={`/singleRoom/family`} className='links'> */}
                                <p>Click to book your room of your own choice </p>
                                {/* </Link> */}

                                <h3 className='text-center mt-2'>$900</h3>

                                <div className='container text-center mb-3'>
                                    <button onClick={bookHotel} type="button" className="btn btn-danger mt-2 mb-3">BOOK NOW</button>
                                </div>

                            </div>

                        </div>







                    </div>



                    {/* FAMILY */}
                    <div class="card ">

                        <div class="slide slide1">

                            <div class="content">

                                <div class="icon">
                                    <img src={card1} />

                                    {/* <i class="fa fa-user-circle" aria-hidden="true"></i> */}

                                </div>

                            </div>

                        </div>

                        <div class="slide slide2">

                            <div class="content">

                                <h3>

                                    Family Room

                                </h3>
                                {/* <Link to={`/singleRoom/family`} className='links'> */}
                                <p>Click to book your room of your own choice </p>
                                {/* </Link> */}
                                <h3 className='text-center mt-2'>$1500</h3>

                                <div className='container text-center mb-3'>
                                    <button onClick={bookHotel} type="button" className="btn btn-danger mt-2 mb-3">BOOK NOW</button>
                                </div>

                            </div>

                        </div>







                    </div>
                </div>
            </div>




            <br /><br />


            {/* ------------------- */}






            {/* Footer */}
            <Footer />
            <MyCopyright />







            {/* <h1 style={{ tectAlign: " center", margin: "50px 0px" }}>TODO APP</h1>

      <h3>{getUserData.username}</h3>

      <div className='container'>

        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />

        <button onClick={addTodo}>Add</button>

        <button title='Delete ALL' onClick={DeleteAll}>Delete All</button>

        <button title='Logout' onClick={logout}>Logout</button>


      </div>


      


      {
        todo.map((val, ind) => {

          return ind === indVal ?

            <div className="upl" key={ind}>
                <input
                  className='ul'
                  type="text"
                  value={updVal}
                  onChange={(e) => setUpdVal(e.target.value)}
                />

                <button className='button' onClick={() => updateTodo(ind)}>Update</button>

            
            </div>

            :

            <div key={ind} className="UpdateList">
              <li>{val}</li>
              <div className='btn'>
                <button className='button' onClick={() => Edit(ind)}>Edit</button>
                <button className='button' onClick={() => DeleteOne(ind)}>Delete</button>
              </div>
            </div>

        })
      }
     */}
        </>
    )
};


export default Todo;