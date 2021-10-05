import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const AllCourses = () => {

    const[courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch('./courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))

    },[])

    return (
        <div className="container">
            <div className='student-container p-3'>
                     <h1 className="d-flex justify-content-center">Our Courses</h1>
                     <h3 className="d-flex justify-content-center text-white"><span>We have: {courses.length} Courses</span></h3>
                </div>
            <div className='row row-cols-1 row-cols-md-3 g-4 mt-2 mb-2'>
                    {
                        courses.map(course=> <Course key={course.id} course={course}></Course>)
                    }
            </div>
        </div>
    );
};

export default AllCourses;