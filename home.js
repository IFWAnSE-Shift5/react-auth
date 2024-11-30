import React from "react";
import { Box, Button, Typography, Link } from '@mui/material';

const HomePageHeader = () => {
  return (
    <Typography 
      className="homepage-header"
      variant='h3'
      sx={{ 
        marginBottom: 5,
      }}
    >Home Page</Typography>
  );
};

const HomePageText1 = () => {
  return (
    <Typography
      className="homepage-text"
      variant="body1"
      sx={{
        marginBottom: 3,
      }}
    >
      This is home page. If you don't have any account yet, you need to
      sign up first.
    </Typography>
  );
};

const HomePageButtons = () => {
  return(
    <Box
      width='100%'
      maxWidth='300px'
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }} 
    >
      <Link 
        href='/login'
      >
        <Button variant="contained">Log in</Button>
      </Link>
      <Link 
        href='/register'
      >
        <Button variant="contained">Sign up</Button>
      </Link>
    </Box>
  )
}

function HomePage() {
  return (
    <Box
      className="homepage"
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f5f5f5', // almost white
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <HomePageHeader />
      <HomePageText1 />
      <HomePageButtons/>
    </Box>
  );
}

export default HomePage;
