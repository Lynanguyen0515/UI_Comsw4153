import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * ProtectedRoute component to guard routes that require authentication.
 * @param {Object} props - The props passed to the component.
 * @param {string} props.token - The JWT token to verify authentication.
 * @param {React.ReactNode} props.children - The child components to render if authenticated.
 * @returns {React.ReactNode} - The child components or a redirect to the login page.
 */
const ProtectedRoute = ({ token, children }) => {
  // Check if token exists; if not, redirect to login
  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
