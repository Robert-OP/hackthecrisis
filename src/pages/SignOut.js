import React from 'react';
import { Box } from '@material-ui/core';

const SignOut = (props) => {
  props.handleAuth(false);
  localStorage.clear();
  // console.log(user);
  return (
    <Box id="dashboard-login">
      <h1>You have been signed out</h1>
    </Box>
  );
};

export default SignOut;
