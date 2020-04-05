import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Paper, Typography } from '@material-ui/core';
import SwipeableTextMobileStepper from './MobileStepper';

import Login from './Login';
import Signup from './Signup';
import { AppContext } from 'App';

import DoctorsImage from 'assets/doctors.png';
import NeedleImage from 'assets/fight.png';
import CovidocImage from 'assets/covidoc.png';

const useStyles = makeStyles((theme) => ({
  box: {
    maxWidth: 960,
    backgroundColor: 'transparent',
  },
  rootGrey: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: '0 20px',
  },
  images: {
    float: 'right',
  },
}));

const Home = () => {
  const {
    state: { showLogin },
  } = React.useContext(AppContext);
  const classes = useStyles();

  if (window.innerWidth < 600) {
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <SwipeableTextMobileStepper />
      </Grid>
    );
  } else {
    return (
      <Box>
        <Paper className={classes.rootGrey}>
          <Box m="auto" py={20} className={classes.box}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Box py={2}>
                  <Typography variant={'h4'}>
                    Track your daily symptoms of COVID-19.
                  </Typography>
                </Box>
                <Typography variant={'body1'}>
                  CoviDoc helps you track your symptoms easily while connecting
                  you to doctors and hospitals in your area. Get advice, keep
                  track of the symptoms data, forecast your health condition,
                  and receive the right diagnostics right on COVIDoc - you will
                  receive the doctor's diagnosis and advice digitally in the
                  COVIDoc dashboard.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                {showLogin ? <Login /> : <Signup />}
              </Grid>
            </Grid>
          </Box>
        </Paper>

        <Paper className={classes.rootGrey}>
          <Box m="auto" py={20} className={classes.box}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Box py={2}>
                  <Typography variant={'h4'}>How it Works?</Typography>
                </Box>
                <Typography variant={'body1'}>
                  Track your symptoms in a few steps and keep the stats of them.
                  It is easier than ever to add your symptoms of COVID-19 and to
                  help doctors discover patterns of how the illness occurs, and
                  inform about the status of your health in real time from your
                  smartphone , tablet, or a computer. Adding the data on COVIDoc
                  is easy.
                </Typography>
              </Grid>
              <Grid
                container
                alignItems="center"
                justify="center"
                xs={12}
                sm={6}
              >
                <img
                  src={DoctorsImage}
                  alt={'doctors'}
                  style={{
                    height: '320px',
                    width: '320px',
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Paper>

        <Paper className={classes.rootGrey}>
          <Box m="auto" py={20} className={classes.box}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Box py={2}>
                  <Typography variant={'h4'}>
                    First, describe your symptoms
                  </Typography>
                </Box>
                <Typography variant={'body1'}>
                  Log in to COVIDoc and click ‘’Add my symptoms’’ button. Simply
                  enter your symptoms on a scale from 1 to 5 and a short
                  description of your medical request or current status.
                  <br />
                  <br />
                  The app uses your data in order to create infographics,
                  discover specific patterns in regards to your health evolution
                  during the COVID-19 period and informs you in case there is a
                  further step to be taken, either sending a COVID-19 test,
                  connect you with one of the doctors available, send a GP, or
                  connect you with the closest hospital in your area.
                  <br />
                  <br />
                  The appointments are covered through your health card and you
                  will be assigned to a hospital/doctor accordingly based on
                  space availability.
                </Typography>
              </Grid>
              <Grid
                container
                justify="center"
                alignItems="center"
                xs={12}
                sm={6}
              >
                <img
                  src={NeedleImage}
                  alt={'fight'}
                  style={{
                    height: '320px',
                    width: '320px',
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Paper>

        <Paper className={classes.rootGrey}>
          <Box m="auto" py={20} className={classes.box}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Box py={2}>
                  <Typography variant={'h4'}>
                    Next, you will hear from a doctor
                  </Typography>
                </Box>
                <Typography variant={'body1'}>
                  Once a doctor reviews your symptoms, depending on your answers
                  about current health conditions, they can assist you through
                  our app.
                  <br />
                  <br />
                  If they are available, you will be contacted through a
                  notification that will require your personal approval to
                  continue in receiving the diagnostic.
                  <br />
                  <br />
                  If the symptoms are considered as normal, and they won’t in
                  any case put your current health condition in danger, or do
                  not seem to predict an evolution of the potential virus, then
                  you will receive a notification stating that everything is
                  fine and that the monitoring process will still be ongoing.
                </Typography>
              </Grid>
              <Grid
                container
                alignItems="center"
                justify="center"
                xs={12}
                sm={6}
              >
                <img
                  src={CovidocImage}
                  alt={'covidoc'}
                  style={{
                    height: '320px',
                    width: '320px',
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    );
  }
};

export default Home;
