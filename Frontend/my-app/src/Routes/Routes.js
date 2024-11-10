// src/Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/Mainpage';
import Homepage from '../pages/Homepage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/homepage" element={<Homepage />} />
    </Routes>
  );
};

export default AppRoutes;
