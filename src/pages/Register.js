// src/pages/Register.js
import React, { useState } from 'react';
import styled from 'styled-components';
import api from '../services/api';
import CustomNavbar from '../Navbar'; // Corrected path

const RegisterContainer = styled.div`
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 70px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StyledInput = styled.input`
  margin-bottom: 15px;
  width: 90%;
`;

const StyledButton = styled.button`
  margin-top: 15px;
  width: 90%;
`;

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', { name, email, password });
      // Redirect to login or other page
    } catch (err) {
      console.error('Registration failed', err);
    }
  };

  return (
    <div>
      <CustomNavbar />
      <RegisterContainer>
        <StyledForm onSubmit={handleSubmit}>
          <h2>Register</h2>
          <StyledInput
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <StyledInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <StyledInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <StyledButton type="submit">
            Register
          </StyledButton>
        </StyledForm>
      </RegisterContainer>
    </div>
  );
}
