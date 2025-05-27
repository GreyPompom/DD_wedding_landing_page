import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Cidade from '../pages/Cidade';
import Praia from '../pages/Praia';

import NavBar from '../components/layout/NavBar';
const AppRoutes = () => {
  return (
   <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/cidade" element={<Cidade />} />
        <Route path="/praia" element={<Praia />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
// This code defines the routes for a React application using react-router-dom.