import React, { useState, useEffect } from "react";

const Profile = ({ username, logout }) => {
  const [userInfo, setUserInfo] = useState({ username: "", email: "" });

  useEffect(() => {
    // Fetch user information from an API or local storage
    const storedUsername = localStorage.getItem("username") || username;
    const storedEmail = localStorage.getItem("email") || "";
    setUserInfo({ username: storedUsername, email: storedEmail });
  }, [username]);

  const handleUpdate = (e) => {
    e.preventDefault();
    // Here you would typically send the updated info to your backend
    localStorage.setItem("username", userInfo.username);
    localStorage.setItem("email", userInfo.email);
    alert("Profile updated successfully!");
  };

  return (
    <div className="page">
      <h2>Profile</h2>
      <form onSubmit={handleUpdate}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={userInfo.username}
          onChange={(e) =>
            setUserInfo({ ...userInfo, username: e.target.value })
          }
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={userInfo.email}
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          required
        />
        <button type="submit">Update Profile</button>
      </form>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
