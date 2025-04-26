// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import LoadingScreen from './pages/LoadingScreen';
import SigninPage from './pages/SigninPage';
import CreateAcPage from './pages/CreateAcPage';
import AccountPage from './pages/AccountPage';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LoadingScreen />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/createAc" element={<CreateAcPage />} />

        <Route path="/MyAccount" element={<AccountPage />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default App;
