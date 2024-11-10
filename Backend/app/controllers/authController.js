// controllers/authController.js
import bcrypt from 'bcrypt';  // Ensure you use bcryptjs

import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import User from '../model/user.js';

// export const register = async (req, res) => {
//   const { username, email, password } = req.body;

//   try {
//     const userExists = await User.findOne({ $or: [{ email }, { username }] });

//     if (userExists) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({
//       username,
//       email,
//       password: hashedPassword,
//     });

//     await user.save();

//     const token = jwt.sign({ id: user._id }, config.JWT_SECRET, {
//       expiresIn: '30d',
//     });

//     res.status(201).json({
//       message: 'User registered successfully!',
//       token,
//       user: { id: user._id, username: user.username, email: user.email },
//     });
//   } catch (error) {
//     console.error('Register Error:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userExists = await User.findOne({ $or: [{ email }, { username }] });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();

    const token = jwt.sign({ id: user._id }, config.JWT_SECRET, {
      expiresIn: '30d',
    });

    res.status(201).json({
      message: 'User registered successfully!',
      token,
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error
      return res.status(400).json({ message: 'Username or email already exists' });
    }
    console.error('Register Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


// export const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     const token = jwt.sign({ id: user._id }, config.JWT_SECRET, {
//       expiresIn: '30d',
//     });

//     res.json({
//       message: 'Login successful!',
//       token,
//       user: { id: user._id, username: user.username, email: user.email },
//     });
//   } catch (error) {
//     console.error('Login Error:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };


export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    // If user is not found
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Log the found user (for debugging)
    console.log('User found:', user);

    // Compare entered password with stored hashed password
    const isPasswordValid = await bcrypt.compare(password.trim(), user.password);

    // Check if password comparison is valid
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Create JWT token
    const token = jwt.sign({ id: user._id }, config.JWT_SECRET, {
      expiresIn: '30d',
    });

    // Send response with token and user info
    res.json({
      message: 'Login successful!',
      token,
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};