import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Link, useHistory } from 'react-router-dom';

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

const Navigation = (props) => {
  const classes = useStyles();
  const history = useHistory();

  let pages = [];
  let { isAuth } = props;

  // console.log(user);
  pages = [
    {
      name: 'Home',
      route: '/',
    },
    {
      name: 'My dashboard',
      route: '/dashboard',
    },
    // {
    //   name: 'Sign out',
    //   route: '/signout',
    // },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            className={classes.title}
            onClick={() => history.push('/')}
          >
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
            ) : null;
          })}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
