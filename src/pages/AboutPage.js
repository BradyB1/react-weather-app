// import React, {useEffect} from 'react';
// import './About.css';

// const About = () => {
//   useEffect(() => {
//     document.title = "React Weather | About"   }, []);

//   return (
//     <div className="app-about">
//       <h1 id = "about-h1">About <hr id= "about-h1-hr"></hr></h1>
//       <div className= "text-content-about">
//         <div>
          
//           <p id = "about-site-desc">Weather application provides different metrics for specific location. When a user opens the application
//             the user's coordinate is used to populate the home page with default location's weather metrics. If
//             host device's location is disabled or location is not found the user would be prompted to manually enter
//             the location in search input field.
//             <br></br>
//             <br></br>
//             <dl>
//               <dt id ="tech-stack-desc">Technology Stack utilized:
//                </dt>
//                <hr id = "tech-stack-hr"></hr>
//               <dd>  - FrontEnd: <b>React</b></dd>
//               <dd>  - DataBase: <b>Supabase</b></dd>
//               <dd>  - Deployment: <b>Vercel</b></dd>
//               <br></br>
//               <dt>Data is retrieved from the following APIs</dt>
//               <hr id="about-api-hr"></hr>
//               <dd>  - <b>OpenWeatherMap</b>: This API allowed us to fetch data regarding the weather and conditions in different locations. </dd>
//               <dd>  - <b>Geolocation</b>: This API allows the app to collect the users current location. Elimnating the need for users to enter their current address to get results. -- Please enter sure you have location features enabled on whatever browser you are using.  </dd>
//               <dd>  - <b>Leaflet.js</b>: Leaflet.js allows the application to generate a map, focused and pinning on your location or location you search.</dd>
//             </dl>
//           </p>
//           {/* was here */}
          
//         </div>
//         </div>
//         <footer id="about-designedBy">Designed & Developed by:  Brady Buttrey, Farah Assgari, and James Miller.</footer>
//     </div>
//   )
// }

// export default About;





import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    document.title = "React Weather | About";
  }, []);

  useEffect(() => {
    document.title = "React Weather | About";
    document.body.classList.add('about-page'); 
    return () => {
      document.body.classList.remove('about-page');
    };
  }, []);
  return (
    <div className="app-about">
      <h1 id="about-h1">About <hr id="about-h1-hr" /></h1>
      <div className="text-content-about">
        <div className="about-section" id="about-site-desc">
          <p>
            Weather application provides different metrics for a specific location. When a user opens the application, the user's coordinate is used to populate the home page with the default location's weather metrics. If the host device's location is disabled or location is not found, the user would be prompted to manually enter the location in the search input field.
          </p>
        </div>
        <div className="about-section" id="tech-stack-desc">
          <dl>
            <dt id = "tech-stack">Technology Stack utilized:</dt>
            <hr />
            <dd>- FrontEnd: <b>React</b></dd>
            <img src= "/reactImg.jpg" id = "reactImg"></img>
            <dd>- DataBase: <b>Supabase</b></dd>
            <img src= "/channels4_profile.jpg" id = "supabaseImg"></img>
            <dd>- Deployment: <b>Vercel</b></dd>
            <img src= "/vercelImg.png" id = "vercelImg"></img>
          </dl>
        </div>
        <div className="about-section" id="about-api-desc">
          <dl>
            <dt id = "tech-stack">Data retrieved from:</dt>
            <hr />
            <dd>- <b>OpenWeatherMap</b>: This API allowed us to fetch data regarding the weather and conditions in different locations.</dd>
            <dd>- <b>Geolocation</b>: This API allows the app to collect the user's current location, eliminating the need for users to enter their current address to get results. -- Please ensure you have location features enabled on whatever browser you are using.</dd>
            <dd>- <b>Leaflet.js</b>: Leaflet.js allows the application to generate a map, focusing and pinning on your location or the location you search.</dd>
          </dl>
          <span> <img src = "opwimg.png" id = "opwimg"></img> <img src = "geoloc.png" id = "geoloc"></img> <img src ="leaf.jpg" id="leafimg"></img></span>
        </div>
        
      </div>
      
      <footer id="about-designedBy">Designed & Developed by: Brady Buttrey, Farah Assgari, and James Miller.</footer>
      
    </div>
    
  );
}

export default About;