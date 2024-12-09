import React from 'react';

const Dashboard = ({ username, logout }) => {
  return (
    <div>
      <h2>Welcome, {username}</h2>
      <nav>
        <button onClick={() => alert('Show Tasks')}>Tasks</button>
        <button onClick={() => alert('Show Reminders')}>Reminders</button>
        <button onClick={() => alert('Show Profile')}>Profile</button>
        <button onClick={logout}>Logout</button>
      </nav>
    </div>
  );
};

export default Dashboard;
