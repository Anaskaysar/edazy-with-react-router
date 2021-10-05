import React from 'react';
import { Link } from 'react-router-dom';
import './student.css'
const Student = (props) => {
    const{id,name,email}=props.student;

    const url=`/student/${id}`;
    return (
        <div>
            <div className="col bg-light card-design">
                <div className="card-body shadow">
                    <h5 className="card-title">{name}{id}</h5>
                    <p className="card-text">Email: {email}</p>
                </div>
                <div className="card-footer">
                        <Link to={url}>View More Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Student;