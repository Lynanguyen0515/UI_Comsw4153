import React from 'react';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';

const App = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      // Send token to the backend for verification
      fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: tokenResponse.credential }),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem('authToken', data.authToken); // Store your JWT
        })
        .catch(console.error);
    },
  });

  return (
    <GoogleOAuthProvider clientId="366999094984-7hof4rq81g82r0ahn68flnu5odgh85di.apps.googleusercontent.com">
      <button onClick={() => login()}>Login with Google</button>
    </GoogleOAuthProvider>
  );
};

export default App;