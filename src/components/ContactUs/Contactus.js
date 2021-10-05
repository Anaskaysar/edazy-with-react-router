import React from 'react';
import { Link } from 'react-router-dom';
import './ContactUS.css'
const Contactus = () => {
    return (
        <div>
            <div className="container  d-flex">
                <div className='col-4 p-5'>
                    <h5>Address </h5>
                    <h3>Edazy</h3>
                    <p>Bashundhara RA,Dhaka,Bangladesh</p>
                    <p>Mobile: 01100000000</p>
                    <p>Email:info@edazy.com</p>
                    <hr />
                    <h5>Follow Us</h5>
                    <p>Visit our social network channels and follow us to stay in touch with latest news</p>

                    <div>
                    <Link to="" className="nav" >Facebook</Link>

                    <Link to=""className="nav ">Youtube</Link>
                     
                    <Link to="" className="nav">Twitter</Link>

                     </div>

                </div>
                <div className=' forms col-6 p-5'>
                    <div className='form-container'>
                        <form className=''>
                            <h5 className="text-center">Write To Us</h5>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contactus;