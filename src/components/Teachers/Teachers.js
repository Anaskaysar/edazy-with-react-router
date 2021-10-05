import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';



const Teachers = () => {

const [teachers,setTeachers]=useState([]);
useEffect(()=>{
    fetch('./teacher.json')
    .then(res=>res.json())
    .then(data=>setTeachers(data));
},[])
    return (
        <div className="container">
            <div className='student-container p-3'>
                     <h1 className="d-flex justify-content-center">Our Teachers</h1>
                     <h3 className="d-flex justify-content-center text-white"><span>We have: {teachers.length} Teachers</span></h3>
                </div>
            <div className='row row-cols-1 row-cols-md-3 g-4 mt-2 mb-2'>
                    {
                        teachers.map(teacher=> <Teacher key={teacher._id}teacher={teacher}></Teacher>)
                    }
            </div>
        </div>
    );
};

export default Teachers;