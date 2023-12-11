import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


const LocationPage = () => {
  const location = useLocation();
  const { latitude, longitude, cityName } = location.state || {};

  useEffect(() => {
    document.title = `React Weather | Location - ${cityName}`;
  }, [cityName]);

  return (
    <div className="app">
      <h1>{cityName}</h1>
      <div className="map-container">
        <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[latitude, longitude]}>
            <Popup>{cityName}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default LocationPage;
