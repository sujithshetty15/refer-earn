// src/components/FAQ.js
import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const FAQ = () => {
  return (
    <Box sx={{ textAlign: 'center', my: 8 }}>
      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ minHeight: '150px' }}>
            <CardContent>
              <Typography sx={{ mb: 2 }}>
                1: How do I refer a friend?
              </Typography>
              <Typography sx={{ mb: 2 }}>
                To refer a friend, simply click the "Refer Now" button on this page. A form will pop up where you can enter your details and your friend's details. Once you submit the form, your friend will receive an invitation to join.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ minHeight: '150px' }}>
            <CardContent>
              <Typography sx={{ mb: 2 }}>
                2: What rewards can I earn by referring friends?
              </Typography>
              <Typography sx={{ mb: 2 }}>
                By referring friends, you can earn various rewards such as cash prizes, discounts on our services, and exclusive access to special events. The exact reward depends on the number of successful referrals you make.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ minHeight: '150px' }}>
            <CardContent>
              <Typography sx={{ mb: 2 }}>
                3: How will I know if my friend has registered?
              </Typography>
              <Typography sx={{ mb: 2 }}>
                You will receive a notification email once your friend successfully registers and completes the sign-up process using your referral link.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ minHeight: '150px' }}>
            <CardContent>
              <Typography sx={{ mb: 2 }}>
                4: Can I refer friends who are already registered?
              </Typography>
              <Typography sx={{ mb: 2 }}>
                No, you can only refer friends who are not already registered with our service. The referral must be a new sign-up to be eligible for rewards.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FAQ;
