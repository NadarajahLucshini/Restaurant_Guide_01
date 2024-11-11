// // server.js
// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import db from './app/model/index.js';
// import authRoutes from './app/routes/auth.js';

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Database connection
// db.connect();

// // Routes
// app.use('/api/auth', authRoutes);

// // Default route
// app.get('/', (req, res) => {
//   res.json({ message: 'Welcome to our simple API.' });
// });

// // Set port and start server
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });


import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from './app/model/index.js';
import authRoutes from './app/routes/auth.js';
import restaurantRoutes from './app/routes/restaurant.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
db.connect();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/restaurants', restaurantRoutes);  // Add restaurant routes

// Default route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to our simple API.' });
});

// Set port and start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

