// src/MainPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Mainpage.css';

const MainPage = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  /*const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        email,
        password,
      });
      alert(response.data.message);

      // Store token in localStorage
      localStorage.setItem('token', response.data.token);

      // Redirect to Homepage after successful login
      navigate('/homepage');
    } catch (error) {
      alert('Login failed: ' + (error.response?.data?.message || error.message));
    }
  };*/
  const handleLogin = (e) => {
    e.preventDefault(); 
    navigate('/homepage'); 
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', {
        username,
        email,
        password,
      });
      alert(response.data.message);
      setIsNewUser(false); // Switch back to login after sign-up
    } catch (error) {
      alert('Sign-up failed: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="main-page">
      <div className="welcome-container">
        <h1>Welcome to Our Page</h1>
        
        {isNewUser ? (
          <form className="signup-form" onSubmit={handleSignUp}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
            <p>
              Already have an account?{' '}
              <span onClick={() => setIsNewUser(false)} className="toggle-link">
                Log in here
              </span>
            </p>
          </form>
        ) : (
          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
            <p>
              New here?{' '}
              <span onClick={() => setIsNewUser(true)} className="toggle-link">
                Sign up here
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default MainPage;
