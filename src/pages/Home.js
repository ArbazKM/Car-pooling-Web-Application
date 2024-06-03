// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Car Pooling Ride Sharing</h1>
      <ul>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Log In</Link></li>
        <li><Link to="/rides">Find Rides</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        {/* Add more links for other pages as needed */}
      </ul>
    </div>
  );
}

export default Home;
