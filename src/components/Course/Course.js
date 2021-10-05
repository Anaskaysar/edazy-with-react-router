import React from 'react';
import './course.css'
const Course = (props) => {

    const {name,intructor_name,img}=props.course;
    return (
<div className="col">
        <div className="card h-100">
                <img src={img}className="w-100 h-100" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{intructor_name}</p>
        </div>
        <div className="card-footer">
            <button className="btn btn-primary">Enroll Now</button>
        </div>
        </div>
  </div>
    );
};

export default Course;

  