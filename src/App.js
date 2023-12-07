import React, { useState } from 'react';
import axios from 'axios';
import MyRoutes  from "./Routes"; 

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState("")

  const api_key = "438f4f20a95048ebb8bbf12f71594554"

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${api_key}`



  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation("")
    }
  }
  return (
    <div className="app">
       <div className="navbar">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </div>
  <MyRoutes /> {/* Use the imported component */}
      <div className="search">
        
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder='Enter Location'
          type="text" />

      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}

          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {/* this  */}
        {data.name !== undefined && (
  
  <div className="data-box-container">
    <div className="feels-box">
      <div className="feels">
        {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F </p> : null}
        <p>Feels Like</p>
      </div>
    </div>

    <div className="humidity-box">
      <div className="humidity">
        {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
        <p>Humidity</p>
      </div>
    </div>

    <div className="wind-box">
      <div className="wind">
        {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
        <p>Wind Speed</p>
      </div>
      </div>
    <div className="clouds-box">
      <div className="clouds">
        {data.clouds ? <p className='bold'> {data.clouds.all}%</p> : null}
        <p>Cloudiness</p>
      </div>
    </div>
    <div className="min-max-box">
      <div className="min-max">
        {data.main ? <p className ='bold'>{data.main.temp_min.toFixed()}°F-{data.main.temp_max.toFixed()}°F</p> : null}
        <p>Min-Max</p>
      </div>
    </div>
    <div className="sunrise-box">
      <div className="sunrise">
        {data.sys ?( <p className= 'bold'> {new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {hour: 'numeric', minute: '2-digit', hour12: true})}</p>) : null}
        <p>Sunrise</p>

      </div>
    </div>
    <div className="sunset-box">
      <div className="sunset">
        {data.sys ?( <p className= 'bold'> {new Date(data.sys.sunset * 1000).toLocaleTimeString([],{hour: 'numeric', minute: '2-digit', hour12: true})}</p>) : null}
        <p>Sunset</p>

      </div>
    </div>
    </div>

    
  
)}

{/* to this */}
        {data.name !== undefined &&
          <div className="bottom">
            {/* <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div> */}
            {/* <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div> */}
            {/* <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}

              <p>Wind Speed</p>
            </div> */}
            {/* <div className="min-max">
            {data.main ? <p className ='bold'>{data.main.temp_min.toFixed()}°F-{data.main.temp_max.toFixed()}°F</p> : null}
            <p>Min-Max</p>
            </div> */}
          </div>
        }

      </div>
        
    </div>
  );
}

export default App;
