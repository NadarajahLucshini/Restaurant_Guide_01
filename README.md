
# Restaurant Guide

The **Restaurant Guide** is a web application designed to provide users with a platform to explore restaurants across different countries. It allows users to view restaurant details, browse by country, and more. This project is built using **Node.js**, **Express**, **MongoDB**, and **React** with JWT-based authentication.

## Features

- **Restaurant Listings**: Users can view restaurants by country.
- **Admin Dashboard**: Admins can manage restaurant data through a secure admin panel.
- **Authentication**: Secure user login and registration using JWT authentication.
- **Responsive Design**: The frontend is fully responsive and works seamlessly across all devices.

## Technologies Used

- **Frontend**:
  - React.js
  - React Router DOM
  - Bootstrap (for styling)
  - Axios (for API requests)

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (for database storage)
  - bcryptjs (for password hashing)
  - JWT (for user authentication)

- **Development Tools**:
  - npm (for package management)
  - MongoDB (for database)

## Setup Instructions

### Prerequisites

- Node.js installed on your machine
- MongoDB running locally or using a cloud service like MongoDB Atlas

### Clone the repository

```bash
git clone https://github.com/NadarajahLucshini/Restaurant_Guide_01.git
cd Restaurant_Guide_01
```

### Install Dependencies

1. **Backend**:
   - Navigate to the `Backend` folder and install the dependencies:
     ```bash
     cd Backend
     npm install
     ```

2. **Frontend**:
   - Navigate to the `Frontend` folder and install the dependencies:
     ```bash
     cd Frontend
     npm install
     ```

### Environment Configuration

1. Create a `.env` file in the `Backend` folder with the following variables:
   ```plaintext
   MONGO_URI=mongodb://localhost:27017/restaurantGuide
   JWT_SECRET=your_jwt_secret
   ```

2. If using a cloud database, replace `MONGO_URI` with your MongoDB connection string.

### Run the Application

1. **Start the Backend**:
   In the `Backend` directory, run the following command to start the server:
   ```bash
   npm start
   ```
   The backend will run on `http://localhost:8080`.

2. **Start the Frontend**:
   In the `Frontend` directory, run the following command to start the React app:
   ```bash
   npm start
   ```
   The frontend will run on `http://localhost:3000`.

### Admin Login

- **Email**: `admin@gmail.com`
- **Password**: `admin1234`

This account allows access to the admin dashboard for managing restaurant data.

### Dummy Users

The project includes a script to add dummy users. You can run the script as follows:

```bash
node dummyUser.js
```

This will add several dummy users to the MongoDB database.

## API Endpoints

### Authentication

- **POST** `/api/auth/register`: Register a new user
- **POST** `/api/auth/login`: Login a user and receive a JWT token

### Restaurants

- **GET** `/api/restaurants`: Fetch all restaurants
- **GET** `/api/restaurants/:country`: Fetch restaurants filtered by country

## Contribution

Feel free to fork the repository and submit pull requests. Contributions are welcome!

### Reporting Issues

If you encounter any issues, please open an issue on the GitHub repository page.

## License

This project is licensed under the MIT License.

---

Made with ❤️ by [Nadarajah Lucshini](https://github.com/NadarajahLucshini)
```

