import React from 'react';
import { Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = React.useState(localStorage.getItem('user') || '');
  const history = useHistory();
  let userObj;
  if (user) {
    userObj = JSON.parse(user);
  } else {
    history.push('/login');
  }
  // console.log(user);
  return (
    <Box id="dashboard-login">
      <h1>Dashboard</h1>
      <h2>{user ? userObj.user.email : 'No user found'}</h2>
    </Box>
  );
};

export default Dashboard;
