// src/Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/Mainpage';
import Homepage from '../pages/Homepage';
import RestaurantsPage from '../pages/RestaurantsPage';
import AdminDashboard from '../pages/AdminDashboard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/restaurants/:countryName" element={<RestaurantsPage />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
    </Routes>
  );
};

export default AppRoutes;
