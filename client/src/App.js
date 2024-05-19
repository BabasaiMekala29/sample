// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import ForgotPassword from './components/ForgotPassword';
import EnterOtp from './components/EnterOtp';
import { ThemeProviderWrapper } from './ThemeContext';
import EmployeeDetails from './components/EmployeeDetails';

function App() {
  return (
    <div className="App">
      <ThemeProviderWrapper>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} />
            <Route path='/enter-otp' element={<EnterOtp />} />
            <Route path='/employee' element={<EmployeeDetails />} />
          </Routes>
        </Router>
      </ThemeProviderWrapper>
    </div>
  );
}

export default App;
