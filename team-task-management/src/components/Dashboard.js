import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ username, logout }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Welcome, {username}</h2>
      <nav>
        <button onClick={() => navigate("/tasks")}>Tasks</button>
        <button onClick={() => navigate("/reminders")}>Reminders</button>
        <button onClick={() => navigate("/profile")}>Profile</button>
        <button onClick={logout}>Logout</button>
      </nav>
    </div>
  );
};

export default Dashboard;
