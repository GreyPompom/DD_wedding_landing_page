import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Cidade from '../pages/Cidade';
import Praia from '../pages/Praia';

import NavBar from '../components/layout/NavBar';
import PageTransition from '../components/ui/PageTransition';
const AppRoutes = () => {
  return (
    <>
      <NavBar />
      <div className='app-routes'>

          <Routes>
            <Route path="/" element={
              <PageTransition>
                <Home />
              </PageTransition>
            } />
            <Route path="/cidade" element={
              <PageTransition>
                <Cidade />
              </PageTransition>
            } />
             <Route path="/praia" element={
              <PageTransition>
                <Praia />
              </PageTransition>
            } />
            <Route path="/about" element={
              <PageTransition>
                <About />
              </PageTransition>
            } />
          </Routes>

      </div>

    </>
  );
};

export default AppRoutes;
// This code defines the routes for a React application using react-router-dom.