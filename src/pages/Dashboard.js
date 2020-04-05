import React from 'react';
import { Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Alert from '../components/Alert';
import { Grid, Button } from '@material-ui/core';

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
    <Box id="dashboard-login">
      <Grid container direction="row" justify="center" alignItems="center">
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
      <h1>Dashboard</h1>
      <h2>{user ? userObj.user.email : 'No user found'}</h2>
    </Box>
  );
};

export default Dashboard;
