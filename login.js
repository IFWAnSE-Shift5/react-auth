import React from "react";
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {
  const navigate = useNavigate();
  
  const handleCancel = () => {
    navigate(-1);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })

    try {
      const user = await signInWithEmailAndPassword(auth, data.get('email'), data.get('password'))
      console.log(user)
      navigate('/main')
    } catch (error) {
      console.log(error.message)
      alert(error.message)
    }     
  }

  return (
    // sx prop is for css in jsx
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: '100%',
          maxWidth: 400,
          padding: 4,
          backgroundColor: '#fff',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 3, textAlign: 'center' }}>
          Login
        </Typography>
        <TextField
          name="email"
          label="Email"
          type="email"
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          fullWidth
          required
          sx={{ marginBottom: 3 }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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

const LoginPage = () => {
  return (
    <>
      <LoginForm />
    </>
  );
};

export default LoginPage;
