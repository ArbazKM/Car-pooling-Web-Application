// src/pages/LogIn.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import api from '../services/api';

function LogIn() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/login', formData);
      // Save user data in local storage or session storage
      localStorage.setItem('user', JSON.stringify(response.data)); // Save user data in localStorage
      history.push('/dashboard'); // Redirect to dashboard page
    } catch (err) {
      console.error('Login failed', err);
    }
  };

  return (
    <div>
      <Navbar />
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LogIn;
