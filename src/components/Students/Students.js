import React, { useEffect, useState } from 'react';
import Student from '../Student/Student';
import './students.css'


const Students = () => {

    const [students,setStudents]=useState([]);
    useEffect(()=>{
        fetch('./students.json')
        .then(res=>res.json())
        .then(data=>setStudents(data))

    },[])
    return (
        <div>
            <div className="container">     
                <div className='student-container p-3'>
                     <h1 className="d-flex justify-content-center">Our Students</h1>
                     <h3 className="d-flex justify-content-center text-white"><span>We have: {students.length} students</span></h3>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-2 mb-2">
                    {
                    students.map(student=> <Student key={student.id} student={student}> </Student>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Students;