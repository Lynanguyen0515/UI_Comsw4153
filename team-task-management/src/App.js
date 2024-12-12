import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function App() {
  const nav = useNavigate();
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  const handleClick = (e) => {
    e.preventDefault();
    Axios.get(`${BACKEND_URL}/auth/google`)
      .then((res) => {
        window.location.assign(res.data.auth_url);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const jwtToken = url.searchParams.get("jwt");

    if (jwtToken) {
      localStorage.setItem("auth_token", jwtToken);
      setToken(jwtToken);
      nav("/dashboard");
    } else {
      const storedToken = localStorage.getItem("auth_token");
      if (storedToken) {
        setToken(storedToken);
      }
    }
    setLoading(false); // Set loading to false once token check is complete
  }, [nav]);

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    setToken(null);
  };

  const username = token
    ? (() => {
        try {
          const decodedToken = JSON.parse(atob(token.split(".")[1]));
          return decodedToken.name || decodedToken.sub;
        } catch {
          handleLogout();
          return "";
        }
      })()
    : "";

  if (loading) {
    return <div>Loading...</div>; // Prevent rendering routes while loading
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={
          token ? <Navigate to="/dashboard" /> : <Login login={handleClick} />
        }
      />
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
  );
}

export default App;
