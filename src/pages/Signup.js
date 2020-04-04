import React from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import firebase from 'components/Firebase';

const Signup = () => {
  const [form, setForm] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (prop) => (event) => {
    setForm({ ...form, [prop]: event.target.value });
  };

  const onRegister = async () => {
    try {
      await firebase.register({
        email: form.email,
        password: form.password,
        role: 'user',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <form>
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
          justify="space-between"
          alignItems="center"
        >
          <br />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={onRegister}
          >
            Register
          </Button>
          <br />
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={() => {}}
          >
            Sign In
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default Signup;
