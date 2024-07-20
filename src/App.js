import React, { useState } from 'react';
import { Container, Typography, Button, Grid, Box, Card, CardContent, Modal, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import backgroundImage from './assets/refer2.jpeg'; // Update this path

const theme = createTheme({
  palette: {
    primary: {
      main: '#007BFF',
    },
  },
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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

const benefitsData = [
  { program: 'Professional Certificate Program in C', referrerBonus: '₹ 7,000', refereeBonus: '₹ 9,000' },
  { program: 'Professional Certificate Program in C++', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
  { program: 'Professional Certificate Program in Python', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
  { program: 'Professional Certificate in Java', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
  { program: 'Professional Certificate in MEAN Stack', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
  { program: 'Professional Certificate in MERN Stack', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
  { program: 'Professional Certificate in Full Stack Web Development', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
];

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    handleClose();
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          {/* Hero Section */}
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
              Get a chance to win up to Rs. 15,000
            </Typography>
            <Button variant="contained" color="primary" onClick={handleOpen}>
              Refer Now
            </Button>
          </Box>

          {/* How It Works Section */}
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

          {/* Benefits Section */}
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
            <Button variant="contained" onClick={handleOpen} color="primary" sx={{ mt: 2 }}>
              Refer Now
            </Button>
          </Box>

          {/* FAQ Section */}
          <Box sx={{ textAlign: 'center', my: 8 }}>
            <Typography variant="h4" gutterBottom>
              Frequently Asked Questions
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card sx={{ minHeight: '150px' }}>
                  <CardContent>
                    <Typography sx={{ mb: 2 }}>1: How do I refer a friend?</Typography>
                    <Typography sx={{ mb: 2 }}>To refer a friend, simply click the "Refer Now" button on this page. A form will pop up where you can enter your details and your friend's details. Once you submit the form, your friend will receive an invitation to join.</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card sx={{ minHeight: '150px' }}>
                  <CardContent>
                    <Typography sx={{ mb: 2 }}>2: What rewards can I earn by referring friends?</Typography>
                    <Typography sx={{ mb: 2 }}>By referring friends, you can earn various rewards such as cash prizes, discounts on our services, and exclusive access to special events. The exact reward depends on the number of successful referrals you make.</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card sx={{ minHeight: '150px' }}>
                  <CardContent>
                    <Typography sx={{ mb: 2 }}>3: How will I know if my friend has registered?</Typography>
                    <Typography sx={{ mb: 2 }}>You will receive a notification email once your friend successfully registers and completes the sign-up process using your referral link.</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card sx={{ minHeight: '150px' }}>
                  <CardContent>
                    <Typography sx={{ mb: 2 }}>4: Can I refer friends who are already registered?</Typography>
                    <Typography sx={{ mb: 2 }}>No, you can only refer friends who are not already registered with our service. The referral must be a new sign-up to be eligible for rewards.</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ textAlign: 'center', py: 4, bgcolor: 'primary.main', color: 'white', width: '99vw', position: 'relative', left: '50%', transform: 'translateX(-50%)' }}>
            <Typography variant="body2">© 2024 Refery</Typography>
          </Box>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="refer-modal-title"
            aria-describedby="refer-modal-description"
          >
            <Box sx={style}>
              <Typography id="refer-modal-title" variant="h6" component="h2">
                Refer a Friend
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  name="referrerName"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Referrer name is required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Your Name"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      error={!!errors.referrerName}
                      helperText={errors.referrerName ? errors.referrerName.message : ''}
                    />
                  )}
                />
                <Controller
                  name="referrerEmail"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: 'Referrer email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: 'Invalid email address'
                    }
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Your Email"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      error={!!errors.referrerEmail}
                      helperText={errors.referrerEmail ? errors.referrerEmail.message : ''}
                    />
                  )}
                />
                <Controller
                  name="refereeName"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Referee name is required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Friend's Name"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      error={!!errors.refereeName}
                      helperText={errors.refereeName ? errors.refereeName.message : ''}
                    />
                  )}
                />
                <Controller
                  name="refereeEmail"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: 'Referee email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: 'Invalid email address'
                    }
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Friend's Email"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      error={!!errors.refereeEmail}
                      helperText={errors.refereeEmail ? errors.refereeEmail.message : ''}
                    />
                  )}
                />
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                  Submit
                </Button>
              </form>
            </Box>
          </Modal>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
