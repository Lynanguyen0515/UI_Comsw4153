import React, { useState } from 'react';
import axios from 'axios';

const SignUp = ({ showLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/api/signup', { username, password });
      alert('Account created successfully');
      showLogin();
    } catch (error) {
      alert('Sign-up failed');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-username">Username:</label>
        <input type="text" id="new-username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <label htmlFor="new-password">Password:</label>
        <input type="password" id="new-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
