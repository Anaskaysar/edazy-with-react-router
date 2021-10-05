import React from 'react';
import { Link } from 'react-router-dom';


const Foooter = () => {
   
    return (
<footer className="bg-dark">
			<div className="container text-white">
				<div className="row justify-content-center">
					<div className="col-md-12 text-center">
						<h2 className="footer-heading">Edazy.com</h2>
						<p className="menu d-flex justify-content-center ">
                                <Link to="/home" className="nav-link active text-white ">Home</Link>

                                <Link to="/courses"className="nav-link active text-white">All Courses</Link>
                                
                                <Link to="/students" className="nav-link active text-white">Our Students</Link>

                                <Link to="/teachers" className="nav-link active text-white">Our Teachers</Link>

                                <Link to="/aboutus" className="nav-link active text-white">About Us</Link>

                                <Link to="/contact"className="nav-link active text-white" >Contact Us</Link>
						</p>
					</div>
				</div>
                <div className="row">
					<div className="col-md-12 d-flex justify-content-center">
                        {/* <Link  className="nav-link active text-white">Facbook</Link>
                        <Link  className="nav-link active text-white">Youtube</Link>
                        <Link  className="nav-link active text-white">Email</Link> */}
                     </div>
				</div>
				<div className="row">
					<div className="col-md-12 text-center">
						<p className="copyright"> 
                            Copyright ©2021 All rights reserved By Edazy.com
                        </p>
					</div>
				</div>
			</div>
		</footer>
    );
};

export default Foooter;