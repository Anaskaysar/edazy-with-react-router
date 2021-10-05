import React from 'react';
import { Link } from 'react-router-dom';

const Teacher = (props) => {
     const{_id,name,email}=props.teacher
     const url=`/teacher/${_id}`

    return (
        
        <div>
            <div class="col card-design bg-light ">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{email}</p>
                    </div>
                    <div class="card-footer">
                        <Link to={url}>View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teacher;


  