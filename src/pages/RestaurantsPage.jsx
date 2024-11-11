import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RestaurantsPage = () => {
  const { country } = useParams(); // Get country name from URL parameter
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Fetch the list of restaurants for the country (replace with your API)
    const fetchRestaurants = async () => {
      // Example API request (you can replace this with an actual API call)
      const response = await fetch(`https://api.example.com/restaurants?country=${country}`);
      const data = await response.json();
      setRestaurants(data.restaurants); // Set the restaurant data
    };

    fetchRestaurants();
  }, [country]);

  return (
    <div>
      <h1>Restaurants in {country}</h1>
      {restaurants.length === 0 ? (
        <p>Loading restaurants...</p>
      ) : (
        <ul>
          {restaurants.map((restaurant, index) => (
            <li key={index}>{restaurant.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantsPage;
