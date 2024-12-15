import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Profile.css";

const Profile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Fetch user details from localStorage
    const storedUser = {
      username: localStorage.getItem("username") || "Guest",
      email: localStorage.getItem("email") || "Not Provided",
      joined_date: localStorage.getItem("joined_date") || "N/A",
    };
    setUser(storedUser);
  }, []);

  return (
    <div className="profile-container">
      <Navbar />
      <div className="profile-header">
        <h1>Welcome, {user.username}!</h1>
        <p>We’re excited to have you on board. Here’s your account overview.</p>
      </div>
      <div className="profile-details">
        <div className="profile-card">
          <h2>Your Details</h2>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Joined Date:</strong> {user.joined_date}</p>
        </div>
        <div className="profile-actions">
          <h2>Quick Actions</h2>
          <button>View Orders</button>
          <button>Edit Profile</button>
          <button>Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
