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
          <p>Weather application provides different metrics for specific location. When a user opens the application
            the user's coordinate is used to populate the home page with default location's weather metrics. If
            host device's location is disabled or location is not found the user would be prompted to manually enter
            the location in search input field.
            <br></br>
            <br></br>
            <dl>
              <dt>Here is the Technology Stack that were utilized to build this project.</dt>
              <dd>  - FronEnd: React</dd>
              <dd>  - DataBase: Supabase</dd>
              <dd>  - Deployment: Vercel</dd>
              <br></br>
              <dt>Data is retrieved from the following APIs</dt>
              <dd>  - Weather: </dd>
              <dd>  - Geolocation: </dd>
            </dl>
          </p>
          
        </div>
        </div>
    </div>
  )
}

export default About;