import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const Navigate = useNavigate();

    useEffect(() => {

        localStorage.clear("user");
        Navigate("/")

    }, [])



    return (
        <>

        </>
    )
}

export default Logout;