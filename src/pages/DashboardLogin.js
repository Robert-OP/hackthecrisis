import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

function DashboardLogin() {
  const [type, setType] = useState('user');

  const onTypeChange = () => {
    type === 'user' ? setType('doctor') : setType('user');
  };

  return (
    <Box id="dashboard-login">
      <Box>
        <h2>Log in</h2>
        <Box>
          <form id="dashboardLoginForm">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Box>
              <br />
              <Button variant="contained" color="primary">
                Log in
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => onTypeChange()}
              >
                {type === 'user' ? 'I am a doctor' : 'I am a user'}
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardLogin;
