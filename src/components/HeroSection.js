import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroSection = ({ handleOpen }) => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h3" gutterBottom>
        Let's Learn & Earn
      </Typography>
      <Typography variant="h5" gutterBottom>
        Get a chance to win up to Rs.15,000
      </Typography>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Refer Now
      </Button>
    </Box>
  );
};

export default HeroSection;
