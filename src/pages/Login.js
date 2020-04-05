import React from 'react';
import { Box, Button, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import firebase from 'components/Firebase';
import Alert from '../components/Alert';

const Login = () => {
  const [form, setForm] = React.useState({
    email: '',
    password: '',
    error: '',
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
      setForm({ error: '' });
      console.log(response);
      history.push('/dashboard');
    } catch (error) {
      // console.error(error);
      setForm({ error: error, email: '', password: '' });
    }
  };

  return (
    <Box>
      <Grid container direction="row" justify="center" alignItems="center">
        {form.error ? (
          <Alert style={{ marginTop: '1rem' }} severity="error">
            {form.error.message}
          </Alert>
        ) : (
          ''
        )}
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
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

              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <br />
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={onLogin}
                >
                  Log in
                </Button>
                <br />
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  onClick={() => onTypeChange()}
                >
                  {type === 'user' ? 'I am a doctor' : 'I am a user'}
                </Button>
              </Grid>
            </form>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Login;
