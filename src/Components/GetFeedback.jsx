import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';


const GetFeedback = () => {

    const [feedbackData, setFeedbackData] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:5000/api/getusersfeeback")

            .then((res) => {

                console.log(res.data);

                setFeedbackData(res.data);

            })

            .catch((err) => {
                console.log(err);

            })

    }, [])


    return (
        <>
            <h1 className='mt-5 text-center'>REVIEWS</h1>


            {/* <marquee behavior="" direction="right"> */}

                <div className="container mb-5">

                    <div className="row justify-content-center">

                        {
                            feedbackData.map((val, ind) => {

                                return (
                                    <div key={ind} className="card col-sm-3 mx-2 my-2" style={{ width: "18rem" }}>
                                        <div className="card-body">
                                            <h5 className="card-title">{val.username}</h5>
                                            <p className="card-text">{val.feedback}</p>
                                            <p style={{
                                                color: "green"
                                            }}><AiFillStar /><AiFillStar /><AiFillStar />
                                                <AiFillStar /><AiOutlineStar /></p>
                                        </div>
                                    </div>

                                )


                            })
                        }

                    </div>

                </div>


            {/* </marquee> */}


        </>
    )
}

export default GetFeedback;
