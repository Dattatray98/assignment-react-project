import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingScreen from './pages/LoadingScreen';
import SigninPage from './pages/SigninPage';
import CreateAcPage from './pages/CreateAcPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoadingScreen />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/createAc" element={<CreateAcPage />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
