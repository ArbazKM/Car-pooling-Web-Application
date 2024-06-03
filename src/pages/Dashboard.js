// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Dashboard() {
  const history = useHistory();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // Redirect to login page if user is not logged in
      history.push('/login');
    }
  }, [history]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    history.push('/login');
  };

  if (!user) {
    return null; // or loading indicator
  }

  return (
    <div>
      <Navbar />
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
