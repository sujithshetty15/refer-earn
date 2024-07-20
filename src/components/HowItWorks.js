// src/components/HowItWorks.js
import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const steps = [
  {
    title: 'Step 1',
    description: 'Refer your friends',
    icon: <ArrowForwardIcon sx={{ fontSize: 50, color: '#007BFF' }} />,
  },
  {
    title: 'Step 2',
    description: 'They register and learn',
    icon: <ArrowForwardIcon sx={{ fontSize: 50, color: '#007BFF' }} />,
  },
  {
    title: 'Step 3',
    description: 'You earn rewards',
    icon: <ArrowForwardIcon sx={{ fontSize: 50, color: '#007BFF' }} />,
  },
];

const HowItWorks = () => {
  return (
    <Box sx={{ textAlign: 'center', my: 8 }}>
      <Typography variant="h4" gutterBottom>
        How Do I Refer?
      </Typography>
      <Grid container spacing={4}>
        {steps.map((step, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                minHeight: '200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(145deg, #007BFF, #0056b3)',
                color: 'white',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                {step.icon}
                <Typography variant="h6" sx={{ mt: 2 }}>
                  {step.title}
                </Typography>
                <Typography>{step.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HowItWorks;
