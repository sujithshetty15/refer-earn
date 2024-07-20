// src/components/Benefits.js
import React from 'react';
import { Box, Typography,Button,Table,Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, } from '@mui/material';


const benefitsData = [
    { program: 'Professional Certificate Program in C', referrerBonus: '₹ 7,000', refereeBonus: '₹ 9,000' },
    { program: 'Professional Certificate Program in C++', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
    { program: 'Professional Certificate Program in Java', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { program: 'Professional Certificate Program in Python', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { program: 'Professional Certificate Program in MERN Stack', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { program: 'Professional Certificate Program in MEAN Stack', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { program: 'Professional Certificate Program in FullStack Web Development', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
  ];

const Benefits = ({ handleOpen }) => {
  return (
    <Box sx={{ textAlign: 'center', my: 8 }}>
            <Typography variant="h4" gutterBottom>
              What Are The Referral Benefits?
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6">Programs</Typography>
            </Box>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Programs</TableCell>
                    <TableCell>Referrer Bonus</TableCell>
                    <TableCell>Referee Bonus</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {benefitsData.map((benefit, index) => (
                    <TableRow key={index}>
                      <TableCell>{benefit.program}</TableCell>
                      <TableCell>{benefit.referrerBonus}</TableCell>
                      <TableCell>{benefit.refereeBonus}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button variant="contained" color="primary" onClick={handleOpen} sx={{ mt: 2 }}>
              Refer Now
            </Button>
          </Box>

  );
};

export default Benefits;
