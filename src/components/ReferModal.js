import React from 'react';
import { Box, Typography, Modal, TextField, Button } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

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

const ReferModal = ({ open, handleClose }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    handleClose();
  };

  return (
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
                message: 'Invalid email address',
              },
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
                message: 'Invalid email address',
              },
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
  );
};

export default ReferModal;
