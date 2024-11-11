// app/routes/restaurant.js
import express from 'express';
import { getRestaurantsByCountry, addRestaurant } from '../controllers/restaurantController.js';

const router = express.Router();

// Get restaurants by country
router.get('/', getRestaurantsByCountry);

// Add a new restaurant (optional for admin)
router.post('/', addRestaurant);

export default router;
