import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Use named import
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('jwt'));

  const handleSetToken = (newToken) => {
    try {
      localStorage.setItem('jwt', newToken);
      setToken(newToken);
    } catch {
      console.error('Failed to set token');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    setToken(null);
  };

  const username = token ? (() => {
    try {
      return jwtDecode(token).username;
    } catch {
      handleLogout();
      return '';
    }
  })() : '';

  return (
    <Router>
      <Routes>
        <Route path="/login" element={token ? <Navigate to="/dashboard" /> : <Login setToken={handleSetToken} />} />
        <Route path="/signup" element={token ? <Navigate to="/dashboard" /> : <SignUp showLogin={() => <Navigate to="/login" />} />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute token={token}>
              <Dashboard username={username} logout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
