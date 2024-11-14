import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './RestaurantPage.css';  // Import CSS for styling

const RestaurantPage = () => {
  const { countryName } = useParams();  // Get country name from URL
  const [restaurants, setRestaurants] = useState([]);  // State to store restaurant data
  const [error, setError] = useState(null);  // State to store error messages
  const [searchTerm, setSearchTerm] = useState('');  // State for search input
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);  // State for selected restaurant

  // Fetch restaurants from backend when the component mounts
  const fetchRestaurants = async () => {
    try {
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

  // Filter restaurants based on search term
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle clicking on a restaurant to show details
  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant);  // Set the clicked restaurant to show details
  };

  return (
    <div className="restaurant-page-container">
      <h1>Restaurants in {countryName}</h1>
      {error && <p className="error-message">{error}</p>}  {/* Display error message if any */}
      
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search restaurants..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="restaurant-list">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant, index) => (
            <div
              key={restaurant._id}
              className="restaurant-item"
              onClick={() => handleRestaurantClick(restaurant)}
            >
              <h2>{restaurant.name}</h2>
            </div>
          ))
        ) : (
          <p>No restaurants found for {countryName}.</p>
        )}
      </div>

      {selectedRestaurant && (
        <div className="restaurant-details">
          <h2>{selectedRestaurant.name}</h2>
          <img src={selectedRestaurant.image} alt={selectedRestaurant.name} />
          <p><strong>Description:</strong> {selectedRestaurant.description}</p>
          <p><strong>Cuisine:</strong> {selectedRestaurant.cuisine}</p>
          <p><strong>Rating:</strong> {selectedRestaurant.rating}</p>
          <p><strong>Address:</strong> {selectedRestaurant.address}</p>
        </div>
      )}
    </div>
  );
};

export default RestaurantPage;
