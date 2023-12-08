import React, {useEffect} from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    document.title = "React Weather | About"   }, []);

  return (
    <div className="app">
      <h1>About</h1>
      <div className= "text-content">
        <div>
          <p>Group project for INST377 class</p>
          <br></br>
        </div>
        </div>
    </div>
  )
}

export default About;