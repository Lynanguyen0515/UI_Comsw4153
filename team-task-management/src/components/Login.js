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
    <GoogleOAuthProvider clientId="<Your Google Client ID>">
      <button onClick={() => login()}>Login with Google</button>
    </GoogleOAuthProvider>
  );
};

export default App;