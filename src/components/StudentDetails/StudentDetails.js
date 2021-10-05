import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const StudentDetails = () => {
    const {studentId}=useParams();
   
    // const [student,setStudent]=useState();

    // useEffect(()=>{
    //     fetch(`./students.json/${studentId}`)
    //     .then(res=>res.json())
    //     .then(data=>setStudent(data))
    // },[studentId])



    return (
        <div className='container'>
            <h1 className='text-center mt-2 bg-danger'> Student Details Of {studentId} Coming Soon</h1>  
            <div className="card-body bg-info text-center shadow">
                    <h5 className="card-title">Hello,I am student-{studentId} </h5>
                    <p className="card-text">These are my details..........</p>
            </div>      
        </div>
    );
};

export default StudentDetails;