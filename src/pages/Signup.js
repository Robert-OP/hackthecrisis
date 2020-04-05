import React from 'react';
import { Box, Button, Grid, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import firebase from 'components/Firebase';
import Alert from '../components/Alert';

const Signup = () => {
  const [form, setForm] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
    error: '',
  });
  const history = useHistory();

  const handleChange = (prop) => (event) => {
    setForm({ ...form, [prop]: event.target.value });
  };

  const onRegister = async (e) => {
    e.preventDefault();
    if (form.password === form.confirmPassword) {
      try {
        const response = await firebase.register({
          email: form.email,
          password: form.password,
          role: 'user',
        });
        setForm({ error: '' });
        console.log(response);
        history.push('/dashboard');
      } catch (error) {
        console.error(error);
        setForm({
          error: error.message,
          email: '',
          password: '',
          confirmPassword: '',
        });
      }
    } else {
      setForm({
        error: 'Passwords do not match',
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
  };

  return (
    <Box>
      <Grid container direction="row" justify="center" alignItems="center">
        {form.error ? (
          <Alert style={{ marginTop: '1rem' }} severity="error">
            {form.error}
          </Alert>
        ) : (
          ''
        )}
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <form>
          <h2>Sign up</h2>
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
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="current-password"
            value={form.confirmPassword}
            onChange={handleChange('confirmPassword')}
          />

          <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="center"
          >
            <br />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={(e) => onRegister(e)}
              type="submit"
            >
              Register
            </Button>
            <br />
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              onClick={() => {
                history.push('/login');
              }}
            >
              Sign In
            </Button>
          </Grid>
        </form>
      </Grid>
    </Box>
  );
};

export default Signup;
