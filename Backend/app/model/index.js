// import mongoose from 'mongoose';
// import User from './user.js';

// const db = {
//   mongoose,
//   User,
//   url: 'mongodb://localhost:27017/restaurantGuide',
// };

// export default db;

import mongoose from 'mongoose';
import User from './user.js';

const db = {
  mongoose,
  User,
  url: 'mongodb://localhost:27017/restaurantGuide',
  connect: async function () {
    try {
      await mongoose.connect(this.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Successfully connected to MongoDB!');
    } catch (error) {
      console.error('Connection error', error);
      process.exit();
    }
  }
};

export default db;
