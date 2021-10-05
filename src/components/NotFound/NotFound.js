import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
<div className="page-wrap d-flex flex-row align-items-center">
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-12 mb-5 text-center">
                <span className="display-1 bg-light d-block">404</span>
                <div className="mb-4 lead">The page you are looking for was not found.</div>
                <Link to='/' className="display-3 d-block">Go Back To Home</Link>
            </div>
        </div>
    </div>
</div>
    );
};

export default NotFound;