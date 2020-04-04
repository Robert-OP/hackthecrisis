import React from 'react';
import { Button, Grid, TextField } from '@material-ui/core';

const Signup = () => {
  const [form, setForm] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (prop) => (event) => {
    setForm({ ...form, [prop]: event.target.value });
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
            onClick={() => {}}
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
