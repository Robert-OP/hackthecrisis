import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  MobileStepper,
  Paper,
  Typography,
  Button,
  Grid,
  Box,
  Link,
} from '@material-ui/core';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useHistory } from 'react-router-dom';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Your online doctor for COVID-19',
    imgPath: 'images/doctor.png',
  },
  {
    label: 'Keep everyone safe',
    imgPath: 'images/doctor.png',
  },
  {
    label: 'Keep doctors up to date',
    imgPath: 'images/doctor.png',
  },
];

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
  },
  img: {
    height: 'auto',
    display: 'block',
    overflow: 'hidden',
    width: '80%',
    margin: '0 auto',
  },
  stepper: {
    background: 'transparent',
  },
}));

function SwipeableTextMobileStepper() {
  const history = useHistory();
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;
  // console.log(window.innerWidth);
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleRegister = () => {
    history.push('/signup');
  };

  const handleLogIn = () => {
    history.push('/login');
  };

  return (
    <Grid
      className={classes.gridWrapper}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Box>
        <AutoPlaySwipeableViews
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  className={classes.img}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>

        <Grid container direction="column" justify="center" alignItems="center">
          <Paper square elevation={0} className={classes.header}>
            <Typography>{tutorialSteps[activeStep].label}</Typography>
          </Paper>
        </Grid>
        <Grid container direction="column" justify="center" alignItems="center">
          <MobileStepper
            steps={maxSteps}
            position="static"
            variant="dots"
            activeStep={activeStep}
            className={classes.stepper}
          />
        </Grid>
        <br />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleRegister}
          className={classes.registerButton}
        >
          Create an account
        </Button>
        <Grid container direction="column" justify="center" alignItems="center">
          <Paper square elevation={0} className={classes.header}>
            <Typography>
              Already have an account?{' '}
              <Link href="#" color="primary" onClick={handleLogIn}>
                Log in
              </Link>
            </Typography>
          </Paper>
        </Grid>
      </Box>
    </Grid>
  );
}

export default SwipeableTextMobileStepper;
