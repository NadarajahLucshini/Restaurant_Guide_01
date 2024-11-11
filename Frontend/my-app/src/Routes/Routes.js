// src/Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/Mainpage';
import Homepage from '../pages/Homepage';
import RestaurantsPage from '../pages/RestaurantsPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/restaurants/:country" element={<RestaurantsPage />} />
    </Routes>
  );
};

export default AppRoutes;
