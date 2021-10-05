import React from 'react';
import './About.css'
import about from'../../resources/About US.jpg'

const About = () => {
    return (
        <div className="bg-secondary">
            <div className="container">
                <h3 className="text-center text-white">About US</h3>
                <div class="container">
                    <div class="row">
                        <div class="col text-white">
                            <h3>Learn and Explore With Edazy</h3>
                            <p>BEST  TRAINING INSTITUTE OF THE COUNTRY
                            Get Ahead, Improve Your Skill with Edazy Training Academy
                            </p>
                            <h3>Why Chose  Edazy ?</h3>
                            <p>
                            Real World Project Development
                            Learn using real world projects with customer requirements and specifications. Enrich your experience of working with real people with real projects. Start building project from scratch and finish it with publishing and deploying it in server.
                            </p>

                        </div>
                        <div class="col ">
                            <img src={about} className="img-fluid w-75 h-75 pl-8" alt="" />
                         </div>
                </div>
            </div>
    
        </div>
        </div>
    );
};

export default About;