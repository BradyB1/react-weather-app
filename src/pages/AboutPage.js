import React, {useEffect} from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    document.title = "React Weather | About"   }, []);

  return (
    <div className="app">
      <h1 id = "about-h1">About <hr id= "about-h1-hr"></hr></h1>
      <div className= "text-content-about">
        <div>
          
          <p id = "about-site-desc">Weather application provides different metrics for specific location. When a user opens the application
            the user's coordinate is used to populate the home page with default location's weather metrics. If
            host device's location is disabled or location is not found the user would be prompted to manually enter
            the location in search input field.
            <br></br>
            <br></br>
            <dl>
              <dt id ="tech-stack-desc">Technology Stack utilized:
               </dt>
               <hr id = "tech-stack-hr"></hr>
              <dd>  - FrontEnd: <b>React</b></dd>
              <dd>  - DataBase: <b>Supabase</b></dd>
              <dd>  - Deployment: <b>Vercel</b></dd>
              <br></br>
              <dt>Data is retrieved from the following APIs</dt>
              <hr id="about-api-hr"></hr>
              <dd>  - <b>OpenWeatherMap</b>: This API allowed us to fetch data regarding the weather and conditions in different locations. </dd>
              <dd>  - <b>Geolocation</b>: This API allows the app to collect the users current location. Elimnating the need for users to enter their current address to get results. -- Please enter sure you have location features enabled on whatever browser you are using.  </dd>
            </dl>
          </p>
          {/* was here */}
          
        </div>
        </div>
        <footer id="about-designedBy">Designed & Developed by:  Brady Buttrey, Farah Assgari, and James Miller.</footer>
    </div>
  )
}

export default About;