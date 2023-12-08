import React, { useState, useEffect } from 'react';
import '../index.css';
import axios from 'axios';

const Home = () => {
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    document.title = "React Weather | Home"
    const api_key = '438f4f20a95048ebb8bbf12f71594554';


    const getWeatherData = (latitude, longitude) => {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${api_key}`;

      axios
        .get(url)
        .then((response) => {
          setWeatherData(response.data);
          setLoading(false);
          setError(null);
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
          setLoading(false);
          setError('Error fetching weather data. Please try again.');
        });
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          getWeatherData(latitude, longitude);
        },
        (error) => {
          console.error(`Error getting geolocation: ${error.message}`);
          setLoading(false);
          setError('Error getting geolocation. Please enter a location manually.');
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setLoading(false);
      setError('Geolocation is not supported. Please enter a location manually.');
    }
  }, []);

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      setLoading(true);
      const api_key = '438f4f20a95048ebb8bbf12f71594554';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${api_key}`;

      axios
        .get(url)
        .then((response) => {
          setWeatherData(response.data);
          setLoading(false);
          setError(null);
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
          setLoading(false);
          setError('Location not found. Please try again.');
        });

      setLocation('');
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>

      <div className="container">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div>
            <div className="top">
              <div className="location">
                <p>{weatherData.name}</p>
              </div>
              <div className="temp">
                {weatherData.main ? <h1>{weatherData.main.temp.toFixed()}°F</h1> : null}
              </div>
              <div className="description">
                {weatherData.weather ? <p>{weatherData.weather[0].main}</p> : null}
              </div>
            </div>

            <div className="data-box-container">
              <div className="feels-box">
                <div className="feels">
                  {weatherData.main ? (
                    <p className="bold">{weatherData.main.feels_like.toFixed()}°F</p>
                  ) : null}
                  <p>Feels Like</p>
                </div>
              </div>

              <div className="humidity-box">
                <div className="humidity">
                  {weatherData.main ? (
                    <p className="bold">{weatherData.main.humidity}%</p>
                  ) : null}
                  <p>Humidity</p>
                </div>
              </div>

              <div className="wind-box">
                <div className="wind">
                  {weatherData.wind ? (
                    <p className="bold">{weatherData.wind.speed.toFixed()} MPH</p>
                  ) : null}
                  <p>Wind Speed</p>
                </div>
              </div>

              <div className="clouds-box">
                <div className="clouds">
                  {weatherData.clouds ? (
                    <p className="bold">{weatherData.clouds.all}%</p>
                  ) : null}
                  <p>Cloudiness</p>
                </div>
              </div>

              <div className="min-max-box">
                <div className="min-max">
                  {weatherData.main ? (
                    <p className="bold">
                      {weatherData.main.temp_min.toFixed()}°F-{weatherData.main.temp_max.toFixed()}°F
                    </p>
                  ) : null}
                  <p>Min-Max</p>
                </div>
              </div>

              <div className="sunrise-box">
                <div className="sunrise">
                  {weatherData.sys ? (
                    <p className="bold">
                      {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString([], {
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true,
                      })}
                    </p>
                  ) : null}
                  <p>Sunrise</p>
                </div>
              </div>

              <div className="sunset-box">
                <div className="sunset">
                  {weatherData.sys ? (
                    <p className="bold">
                      {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString([], {
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true,
                      })}
                    </p>
                  ) : null}
                  <p>Sunset</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
