import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navigation = () => {
  const classes = useStyles();
  const pages = [
    {
      name: 'Home',
      route: '/',
    },
    {
      name: 'My dashboard',
      route: '/dashboard',
    },
    {
      name: 'Login',
      route: '/login',
    },
    {
      name: 'Signup',
      route: '/signup',
    },
  ];
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            COVIDoc
          </Typography>
          {pages.map((page, index) => {
            return (
              <Button
                key={'button-' + index}
                color="inherit"
                component={Link}
                to={process.env.PUBLIC_URL + page.route}
              >
                {page.name}
              </Button>
            );
          })}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
