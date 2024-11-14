import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [newRestaurant, setNewRestaurant] = useState({
    name: '',
    country: '',
    city: '',
    cuisine: '',
    address: '',
    rating: ''
  });
  const [editMode, setEditMode] = useState(false);
  const [editRestaurant, setEditRestaurant] = useState(null);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/restaurants');
      setRestaurants(response.data);
    } catch (err) {
      console.error('Error fetching restaurants', err);
    }
  };

  const handleAddRestaurant = async () => {
    try {
      await axios.post('http://localhost:8080/api/restaurants', newRestaurant);
      fetchRestaurants();  // Refresh list
    } catch (err) {
      console.error('Error adding restaurant', err);
    }
  };

  const handleDeleteRestaurant = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/restaurants/${id}`);
      fetchRestaurants();  // Refresh list
    } catch (err) {
      console.error('Error deleting restaurant', err);
    }
  };

  const handleEditRestaurant = async () => {
    try {
      await axios.put(`http://localhost:8080/api/restaurants/${editRestaurant._id}`, editRestaurant);
      fetchRestaurants();  // Refresh list
      setEditMode(false);  // Exit edit mode
    } catch (err) {
      console.error('Error editing restaurant', err);
    }
  };

  return (
    <div className="admin-dashboard-container">
      <h1>Admin Dashboard</h1>

      <div className="restaurant-form">
        {editMode ? (
          <div>
            <h2>Edit Restaurant</h2>
            <input
              type="text"
              value={editRestaurant.name}
              onChange={(e) => setEditRestaurant({ ...editRestaurant, name: e.target.value })}
              placeholder="Restaurant Name"
            />
            <input
              type="text"
              value={editRestaurant.country}
              onChange={(e) => setEditRestaurant({ ...editRestaurant, country: e.target.value })}
              placeholder="Country"
            />
            <input
              type="text"
              value={editRestaurant.city}
              onChange={(e) => setEditRestaurant({ ...editRestaurant, city: e.target.value })}
              placeholder="City"
            />
            <input
              type="text"
              value={editRestaurant.cuisine}
              onChange={(e) => setEditRestaurant({ ...editRestaurant, cuisine: e.target.value })}
              placeholder="Cuisine"
            />
            <input
              type="text"
              value={editRestaurant.address}
              onChange={(e) => setEditRestaurant({ ...editRestaurant, address: e.target.value })}
              placeholder="Address"
            />
            <input
              type="number"
              value={editRestaurant.rating}
              onChange={(e) => setEditRestaurant({ ...editRestaurant, rating: e.target.value })}
              placeholder="Rating"
            />
            <button onClick={handleEditRestaurant}>Update Restaurant</button>
          </div>
        ) : (
          <div>
            <h2>Add New Restaurant</h2>
            <input
              type="text"
              value={newRestaurant.name}
              onChange={(e) => setNewRestaurant({ ...newRestaurant, name: e.target.value })}
              placeholder="Restaurant Name"
            />
            <input
              type="text"
              value={newRestaurant.country}
              onChange={(e) => setNewRestaurant({ ...newRestaurant, country: e.target.value })}
              placeholder="Country"
            />
            <input
              type="text"
              value={newRestaurant.city}
              onChange={(e) => setNewRestaurant({ ...newRestaurant, city: e.target.value })}
              placeholder="City"
            />
            <input
              type="text"
              value={newRestaurant.cuisine}
              onChange={(e) => setNewRestaurant({ ...newRestaurant, cuisine: e.target.value })}
              placeholder="Cuisine"
            />
            <input
              type="text"
              value={newRestaurant.address}
              onChange={(e) => setNewRestaurant({ ...newRestaurant, address: e.target.value })}
              placeholder="Address"
            />
            <input
              type="number"
              value={newRestaurant.rating}
              onChange={(e) => setNewRestaurant({ ...newRestaurant, rating: e.target.value })}
              placeholder="Rating"
            />
            <button onClick={handleAddRestaurant}>Add Restaurant</button>
          </div>
        )}
      </div>

      <div className="restaurant-list">
        <h2>Restaurant List</h2>
        {restaurants.map((restaurant) => (
          <div key={restaurant._id} className="restaurant-item">
            <h3>{restaurant.name}</h3>
            <p>{restaurant.country}, {restaurant.city}</p>
            <button onClick={() => setEditRestaurant(restaurant) && setEditMode(true)}>Edit</button>
            <button onClick={() => handleDeleteRestaurant(restaurant._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
