// import mongoose from 'mongoose';

// const restaurantSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   country: {
//     type: String,
//     required: true,
//   },
//   city: {
//     type: String,
//     required: true,
//   },
//   address: {
//     type: String,
//   },
//   phone_number: {
//     type: String,
//   },
//   website_url: {
//     type: String,
//   },
// }, { timestamps: true });

// const Restaurant = mongoose.model('Restaurant', restaurantSchema);

// export default Restaurant;


import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  address: String,
  description: String,
  cuisine: String,
  rating: Number,
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant;

