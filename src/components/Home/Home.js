 import React from 'react';
import AllCourses from '../AllCourses/AllCourses';
import './home.css'
 
 const Home = () => {
     return (
        <div>
            <div className="home-intro">
                <div className="container">
                    <h1 className="fs-1 d-flex justify-content-center">LEARN FROM THE BEST</h1>
                    <h2 className=" d-flex justify-content-center"> <span>Get Ahead, Improve Your Skill with Edazy Training Academy</span></h2>
                    <h4 className='text-center'>Get Hands On Experience in Real World Online Education System With Updated Technoloy.You Will Get Both Practical And Theoratical Education With Our Advanced Teaching Method.</h4>
                </div>
            </div>
           
            <div className="container mt-1">
                <AllCourses></AllCourses>     
            </div> 
        </div>
     );
 };
 
 export default Home;