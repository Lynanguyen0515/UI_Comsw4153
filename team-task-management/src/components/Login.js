import { GoogleLogin } from '@react-oauth/google';
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { generateJwt } from "../api"; // Import the function from api.js

function Login() {
  const nav = useNavigate();

  // Check if user is already authenticated
  useEffect(() => {
    if (localStorage.getItem("auth_token") !== null) {
      nav("/home");  // Redirect to home if already logged in
    }
  }, [nav]);

  // Handle Google login response
  const handleGoogleLogin = async (response) => {
    console.log("Google Login Response:", response);  // Log the response
    const googleToken = response.credential;

    try {
      const data = await generateJwt(googleToken);
      console.log("JWT Response Data:", data);  // Log the response from generateJwt function

      if (data.jwt) {
        localStorage.setItem("auth_token", data.jwt);
        nav("/home");  // Redirect to home
      } else {
      alert("Error logging in. Please try again.");
      }
    } catch (error) {
      console.error("Login Failed:", error);  // Log the error
      alert("An error occurred while logging in. Please try again.");
    }
  };


  return (
    <div>
      <h1>Login</h1>
      <GoogleLogin
        onSuccess={handleGoogleLogin}
        onError={() => console.log("Login Failed")}
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} // Make sure this is set
      />
    </div>
  );
}

export default Login;
