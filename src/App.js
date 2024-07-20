import React, { useState } from 'react';
import { CssBaseline, Container, Box, ThemeProvider, createTheme } from '@mui/material';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ReferModal from './components/ReferModal';
import backgroundImage from './assets/refer2.jpeg'; // Update this path

const theme = createTheme();

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Container>
          <HeroSection handleOpen={handleOpen} />
          <HowItWorks />
          <Benefits handleOpen={handleOpen} />
          <FAQ />
          <Footer />
          <ReferModal open={open} handleClose={handleClose} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
