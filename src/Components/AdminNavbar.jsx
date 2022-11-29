import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminNavbar = () => {

    const navigate = useNavigate();


    const logout = () => {
        localStorage.removeItem("user");
        navigate("/");
    }
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">MIR</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <button className="navbar-toggler-icon homeBtn"></button>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <span style={{ cursor: 'pointer' }} className="nav-link">Home <span className="sr-only">(current)</span></span>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-danger my-2 my-sm-0" type="submit" onClick={logout}>Logout</button>
                    </form>
                </div>
            </nav>
    </>
  )
}

export default AdminNavbar