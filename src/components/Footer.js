// src/components/Footer.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        py: 2,
        bgcolor: 'primary.main',
        color: 'white',
        width: '100vw',
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)'
      }}
    >
      <Container>
        <Box textAlign="center">
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2">
            Email: support@refery.com
          </Typography>
          <Typography variant="body2">
            Phone: +1 234 567 890
          </Typography>
        </Box>
        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            &copy; 2024 Refery. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
