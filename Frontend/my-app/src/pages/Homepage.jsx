import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import './Homepage.css';  // Import the CSS file

// GeoJSON file for the world map
const geoUrl = 'https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson';

const Homepage = () => {
  const navigate = useNavigate();
  const [tooltipContent, setTooltipContent] = useState('');

  const handleCountryClick = (countryName) => {
    // Redirect to the restaurants page with the country name as a URL parameter
    navigate(`/restaurants/${countryName}`);
  };

  return (
    <div className="homepage-container">
      <h1>Explore the World Map</h1>
      <div className="map-container">
        <ComposableMap projection="geoMercator">
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#D6D6DA"
                  stroke="#FFFFFF"
                  className="geography"
                  onClick={() => handleCountryClick(geo.properties.NAME)}
                  onMouseEnter={() => setTooltipContent(geo.properties.NAME)}
                  onMouseLeave={() => setTooltipContent('')}
                >
                  <title>lucshini</title>
                </Geography>
              ))
            }
          </Geographies>
        </ComposableMap>
        {/* Display tooltip when hovering over a country */}
        {tooltipContent && (
          <div className="tooltip">
            {tooltipContent}
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
