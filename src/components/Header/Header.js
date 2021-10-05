import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../resources/logos/Logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="bg-dark">
            <nav className="navbar navbar">
                    <div className="container">
                    <Link className="navbar-brand text-white "   to="/">
                            <img src={logo} alt="" />
                            Edazy</Link>
                        <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
            </nav>
            <div className="container links d-flex justify-content-center">
                    <Link to="/home" className="nav-link active text-white" >Home</Link>

                    <Link to="/courses"className="nav-link active text-white">All Courses</Link>
                     
                    <Link to="/students" className="nav-link active text-white">Our Students</Link>

                    <Link to="/teachers" className="nav-link active text-white">Our Teachers</Link>

                    <Link to="/aboutus" className="nav-link active text-white">About Us</Link>

                    <Link to="/contactus"className="nav-link active text-white" >Contact Us</Link>
            </div>  
        </div>
    );
};

export default Header;