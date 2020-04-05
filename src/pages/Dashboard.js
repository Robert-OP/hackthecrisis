import React from 'react';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Alert from '../components/Alert';

const Dashboard = (props) => {
  const [user, setUser] = React.useState(localStorage.getItem('user') || '');
  const [initialForm, setInitialForm] = React.useState(true);
  const history = useHistory();

  const handleAuth = (newValue) => {
    props.handleAuth(newValue);
  };

  const handleScreening = () => {
    history.push('/screening');
  };

  let userObj;
  if (user) {
    userObj = JSON.parse(user);
    handleAuth(true);
  } else {
    history.push('/login');
    handleAuth(false);
  }
  // console.log(user);
  return (
    <Grid container>
      <Grid
        item
        xs={6}
        style={{
          backgroundColor: '#EAF5F2',
        }}
      >
        <Box py={2}>
          <Typography variant={'h4'}>Prescriptions & Notes</Typography>
        </Box>
        <Typography variant={'body1'}>
          Hello, you haven't been prescribed any medication or received a
          doctor's note yet. Please, fill in the form or wait until your
          screening is processed.
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Box py={2}>
          <Typography variant={'h4'}>Consultations</Typography>
        </Box>
        <Typography variant={'body1'}></Typography>
        {props.handleScreening ? (
          <Alert style={{ marginTop: '1rem' }} severity="info">
            <Box>
              Please proceed to the screening form
              <Box>
                <Button
                  style={{ marginTop: '10px' }}
                  variant="contained"
                  color="primary"
                  onClick={handleScreening}
                >
                  See form
                </Button>
              </Box>
            </Box>
          </Alert>
        ) : (
          ''
        )}
      </Grid>
    </Grid>
  );
};

export default Dashboard;
