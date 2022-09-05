import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Home = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  )
}

const TextField = () => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
          required
          id="username"
          label="Required"
          defaultValue="Username"
          variant="standard"
        />
        <TextField
          required
          id="password"
          label="Required"
          defaultValue="Password"
          variant="standard"
        />
      </div>
      <div>
      <TextField
          error
          id="usernameError"
          label="Error"
          defaultValue="Username"
          helperText="Incorrect entry."
          variant="standard"
        />
        <TextField
          error
          id="passwordError"
          label="Error"
          defaultValue="Password"
          helperText="Incorrect entry."
          variant="standard"
        />
      </div>
      <button>Login</button>
    </Box>
  );
}

export default Home;