import Restaurant from '../model/restaurant.js';

// Get restaurants by country
// app/controllers/restaurantController.js


// Get restaurants by country
export const getRestaurantsByCountry = async (req, res) => {
    const { country } = req.query;
    console.log('Country received:', country);  // Extract the country from the query string
  try {
    // Find restaurants by country
    const restaurants = await Restaurant.find({ country });
    if (restaurants.length > 0) {
      res.status(200).json(restaurants);  // Send the list of restaurants
    } else {
      res.status(404).json({ message: `No restaurants found for ${country}.` });  // Handle no restaurants found
    }
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


// Add a new restaurant (optional for admin)
export const addRestaurant = async (req, res) => {
  const { name, country, address, description, cuisine, rating } = req.body;
  try {
    const restaurant = new Restaurant({ name, country, address, description, cuisine, rating });
    await restaurant.save();
    res.status(201).json({ message: 'Restaurant added successfully', restaurant });
  } catch (error) {
    console.error('Error adding restaurant:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
