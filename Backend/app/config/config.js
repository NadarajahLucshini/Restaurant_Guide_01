
// // import dotenv from 'dotenv';

// // dotenv.config();

// // export default {
// //   url: 'mongodb://localhost:27017/qtech',
// //   JWT_SECRET: process.env.JWT_SECRET,
// // };


// import dotenv from 'dotenv';

// dotenv.config();

// export default {
//   url: process.env.MONGO_URL || 'mongodb://localhost:27017/restaurantGuide',
  
//   JWT_SECRET: process.env.JWT_SECRET,
// };


// config/config.js
import dotenv from 'dotenv';

dotenv.config();

export default {
  url: process.env.MONGO_URL || 'mongodb://localhost:27017/restaurantGuide',
  JWT_SECRET: process.env.JWT_SECRET,
};
