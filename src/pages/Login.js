import React from 'react';
import { Box, Button, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import firebase from 'components/Firebase';

const Login = () => {
  const [form, setForm] = React.useState({
    email: '',
    password: '',
  });
  const [type, setType] = React.useState('user');
  const history = useHistory();

  const handleChange = (prop) => (event) => {
    setForm({ ...form, [prop]: event.target.value });
  };

  const onTypeChange = () => {
    type === 'user' ? setType('doctor') : setType('user');
  };

  const onLogin = async () => {
    try {
      const response = await firebase.login(form.email, form.password);
      console.log(response);
      history.push('/dashboard');
    } catch (error) {
      console.error(error);
    }
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
              value={form.email}
              onChange={handleChange('email')}
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
              value={form.password}
              onChange={handleChange('password')}
            />

            <Box>
              <br />
              <Button variant="contained" color="primary" onClick={onLogin}>
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
};

export default Login;
