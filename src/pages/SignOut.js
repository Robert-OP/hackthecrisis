import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box } from '@material-ui/core';

const SignOut = () => {
  const history = useHistory();
  history.push('/');
  // console.log(user);
  return (
    <Box id="dashboard-login">
      <h1>You have been signed out</h1>
    </Box>
  );
};

export default SignOut;
