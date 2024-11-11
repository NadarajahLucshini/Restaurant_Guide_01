import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './RestaurantPage.css';  // Import CSS for styling

const RestaurantPage = () => {
  const { countryName } = useParams();  // Get country name from URL
  const [restaurants, setRestaurants] = useState([]);  // State to store restaurant data
  const [error, setError] = useState(null);  // State to store error messages

  // Fetch restaurants from backend when the component mounts
  const fetchRestaurants = async () => {
    try {
      // Make a GET request to the backend with the country name as a query parameter
      const response = await axios.get(`http://localhost:8080/api/restaurants?country=${countryName}`);
      setRestaurants(response.data);  // Set fetched data to state
    } catch (err) {
      console.error('Failed to fetch data:', err);
      setError('Could not fetch restaurant data. Please try again later.');
    }
  };

  useEffect(() => {
    if (countryName) {
      fetchRestaurants();  // Fetch data when component loads or countryName changes
    }
  }, [countryName]);  // Dependency on countryName

  return (
    <div className="restaurant-page-container">
      <h1>Restaurants in {countryName}</h1>
      {error && <p className="error-message">{error}</p>}  {/* Display error message if any */}
      <div className="restaurant-list">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant, index) => (
            <div key={index} className="restaurant-item">
              <h2>{restaurant.name}</h2>
              <p><strong>Address:</strong> {restaurant.address}</p>
              <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
              <p><strong>Rating:</strong> {restaurant.rating}</p>
            </div>
          ))
        ) : (
          <p>No restaurants found for {countryName}.</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantPage;
