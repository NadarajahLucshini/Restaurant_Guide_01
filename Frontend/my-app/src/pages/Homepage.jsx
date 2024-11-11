// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
// import './Homepage.css';

// // Updated GeoJSON URL
// const geoUrl = 'https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/countries.geojson';

// const Homepage = () => {
//   const navigate = useNavigate();
//   const [tooltipContent, setTooltipContent] = useState('');

//   const handleCountryClick = (countryName) => {
//     console.log("Country clicked:", countryName);
//     if (countryName) {
//       const formattedCountryName = countryName.toLowerCase().replace(/ /g, '-');
//       console.log("Navigating to:", `/restaurants/${formattedCountryName}`);
//       navigate(`/restaurants/${formattedCountryName}`);
//     } else {
//       console.error("Country name is undefined");
//     }
//   }

//   return (
//     <div className="homepage-container">
//       <h1>Explore the World Map</h1>
//       <div className="map-container">
//         <ComposableMap projection="geoMercator">
//           <Geographies geography={geoUrl}>
//             {({ geographies }) =>
//               geographies.map((geo) => (
//                 <Geography
//                   key={geo.rsmKey}
//                   geography={geo}
//                   fill="#D6D6DA"
//                   stroke="#FFFFFF"
//                   className="geography"
//                   onClick={() => handleCountryClick(geo.properties.NAME)}
//                   onMouseEnter={() => setTooltipContent(geo.properties.NAME)}
//                   onMouseLeave={() => setTooltipContent('')}
//                 >
//                   <title>{geo.properties.NAME}</title>
//                 </Geography>
//               ))
//             }
//           </Geographies>
//         </ComposableMap>
//         {tooltipContent && (
//           <div className="tooltip">
//             {tooltipContent}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Homepage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

// Sample data for countries (you can replace this with a real API or database)
const countriesData = [
  { name: 'India', image: 'https://example.com/india.jpg' },
  { name: 'United States', image: 'https://example.com/usa.jpg' },
  { name: 'Australia', image: 'https://example.com/australia.jpg' },
  { name: 'Canada', image: 'https://example.com/canada.jpg' },
  // Add more countries as needed
];

const Homepage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Filter countries based on the search term
  const filteredCountries = countriesData.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCountryClick = (countryName) => {
    const formattedCountryName = countryName.toLowerCase().replace(/ /g, '-');
    navigate(`/restaurants/${formattedCountryName}`);
  };

  return (
    <div className="homepage-container">
      <h1>Explore Countries</h1>
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="countries-list">
        {filteredCountries.map(country => (
          <div
            key={country.name}
            className="country-card"
            onClick={() => handleCountryClick(country.name)}
          >
            <img src={country.image} alt={country.name} />
            <h2>{country.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;