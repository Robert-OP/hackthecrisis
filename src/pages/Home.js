import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import SwipeableTextMobileStepper from './MobileStepper';

import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({}));

function Home() {
  if (window.innerWidth < 600) {
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <SwipeableTextMobileStepper />
      </Grid>
    );
  } else {
    return <Grid>Home landing page</Grid>;
  }
}

export default Home;
