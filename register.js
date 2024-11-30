import React from "react";
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
import '../styling/register.css'

const RegisterForm = () => {
  const navigate = useNavigate();
  
  const handleCancel = () => {
    navigate(-1);
  }

  return (
    // sx prop is for css in jsx
    <Box className="register-container">
      <Box
        component="form"
        className="register-box"
      >
        <Typography 
          variant="h5" 
          className="register-title"
          sx={{ marginBottom: '16px' }}>
          Sign Up
        </Typography>
        <TextField
          label="Email"
          type="email"
          fullWidth
          required
          sx={{ marginBottom:'8px' }}
        />
        <TextField
          label="Username"
          type="text"
          fullWidth
          required
          sx={{ marginBottom:'8px' }}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          required
          sx={{ marginBottom:'16px' }}
        />
        <Box className="register-buttons-box">
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleCancel}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const RegisterPage = () => {
  return (
    <div className="registerpage">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
