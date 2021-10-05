import React from 'react';
import { useParams } from 'react-router';

const TeacherDetails = () => {
    const {teacherId}=useParams();
    return (
        <div className='container'>
            <h1 className='text-center mt-2 bg-danger'> Teacher Details Of {teacherId} Coming Soon</h1>  
            <div className="card-body bg-info text-center shadow">
                    <h5 className="card-title">Hello,I am Professor Mr. {teacherId} </h5>
                    <p className="card-text">These are my details..........</p>
            </div>      
        </div>
    );
};

export default TeacherDetails;