import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Grid,
  Box,
  TextField,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core/';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  backButton: {
    marginRight: theme.spacing(1),
  },
  form: {
    width: '60vw',
    maxWidth: '600px',
  },
}));

function getSteps() {
  return ['Personal', 'Health', 'Overview'];
}

const ScreeningForm = props => {
  const { handleAuth } = props;
  handleAuth(true);
  const history = useHistory();
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [form, setForm] = React.useState({
    postalCode: '',
    birthYear: '',
    bloodGroup: '',
    tested: '',
    diabetes: '',
    asthma: '',
    cardiovascular: '',
    ilnesses: '',
  });

  const handleChange = prop => event => {
    setForm({ ...form, [prop]: event.target.value });
  };

  const steps = getSteps();

  const handleNext = () => {
    if (activeStep === 2) {
      props.handleScreening(false);
      history.push('/dashboard');
    }
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const getStepContent = stepIndex => {
    switch (stepIndex) {
      case 0:
        return (
          <form className={classes.form}>
            <Box>
              <FormLabel required for="postalCode">
                Postal code:
              </FormLabel>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="postalCode"
                name="postalCode"
                autoFocus
                value={form.postalCode}
                onChange={handleChange('postalCode')}
              />
            </Box>
            <br />
            <Box>
              <FormLabel required for="postalCode">
                Year of birth:
              </FormLabel>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="birthYear"
                name="birthYear"
                autoFocus
                value={form.birthYear}
                onChange={handleChange('birthYear')}
              />
            </Box>
            <Box>
              <br />
              <FormLabel component="legend">Blood type</FormLabel>
              <FormControlLabel
                value="A"
                control={
                  <Radio
                    checked={form.bloodGroup === 'A'}
                    onChange={handleChange('bloodGroup')}
                    value="A"
                  />
                }
                label="A"
              />
              <FormControlLabel
                value="B"
                control={
                  <Radio
                    checked={form.bloodGroup === 'B'}
                    onChange={handleChange('bloodGroup')}
                    value="B"
                  />
                }
                label="B"
              />
              <FormControlLabel
                value="AB"
                control={
                  <Radio
                    checked={form.bloodGroup === 'AB'}
                    onChange={handleChange('bloodGroup')}
                    value="AB"
                  />
                }
                label="AB"
              />
              <FormControlLabel
                value="0"
                control={
                  <Radio
                    checked={form.bloodGroup === '0'}
                    onChange={handleChange('bloodGroup')}
                    value="0"
                  />
                }
                label="0"
              />
            </Box>
          </form>
        );
      case 1:
        return (
          <form className={classes.form}>
            <Box>
              <FormLabel required>Have you been tested for COVID-19?</FormLabel>

              <RadioGroup
                aria-label="tested"
                name="tested"
                value={form.tested}
                onChange={handleChange}
              >
                <br />
                <FormControlLabel
                  value="No"
                  control={
                    <Radio
                      checked={form.tested === 'No'}
                      onChange={handleChange('tested')}
                      value="No"
                    />
                  }
                  label="No"
                />
                <FormControlLabel
                  value="Yes, positive"
                  control={
                    <Radio
                      checked={form.tested === 'Yes, positive'}
                      onChange={handleChange('tested')}
                      value="Yes, positive"
                    />
                  }
                  label="Yes, positive"
                />
                <FormControlLabel
                  value="Yes, negative"
                  control={
                    <Radio
                      checked={form.tested === 'Yes, negative'}
                      onChange={handleChange('tested')}
                      value="Yes, negative"
                    />
                  }
                  label="Yes, negative"
                />
              </RadioGroup>
            </Box>
            <br />
            <Box>
              <FormLabel required>Do you have diabetes?</FormLabel>
              <RadioGroup
                aria-label="diabetes"
                name="diabetes"
                value={form.diabetes}
                onChange={handleChange}
              >
                <br />
                <FormControlLabel
                  value="No"
                  control={
                    <Radio
                      checked={form.diabetes === 'No'}
                      onChange={handleChange('diabetes')}
                      value="No"
                    />
                  }
                  label="No"
                />
                <FormControlLabel
                  value="Yes"
                  control={
                    <Radio
                      checked={form.diabetes === 'Yes'}
                      onChange={handleChange('diabetes')}
                      value="Yes"
                    />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  value="I don't know"
                  control={
                    <Radio
                      checked={form.diabetes === "I don't know"}
                      onChange={handleChange('diabetes')}
                      value="I don't know"
                    />
                  }
                  label="I don't know"
                />
              </RadioGroup>
            </Box>
            <br />
            <Box>
              <FormLabel required>Do you have asthma?</FormLabel>
              <RadioGroup
                aria-label="asthma"
                name="asthma"
                value={form.asthma}
                onChange={handleChange}
              >
                <br />
                <FormControlLabel
                  value="No"
                  control={
                    <Radio
                      checked={form.asthma === 'No'}
                      onChange={handleChange('asthma')}
                      value="No"
                    />
                  }
                  label="No"
                />
                <FormControlLabel
                  value="Yes"
                  control={
                    <Radio
                      checked={form.asthma === 'Yes'}
                      onChange={handleChange('asthma')}
                      value="Yes"
                    />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  value="I don't know"
                  control={
                    <Radio
                      checked={form.asthma === "I don't know"}
                      onChange={handleChange('asthma')}
                      value="I don't know"
                    />
                  }
                  label="I don't know"
                />
              </RadioGroup>
            </Box>
            <br />

            <Box>
              <FormLabel required>
                Do you have cardiovascular diseases?
              </FormLabel>
              <RadioGroup
                aria-label="cardiovascular"
                name="cardiovascular"
                value={form.cardiovascular}
                onChange={handleChange}
              >
                <br />
                <FormControlLabel
                  value="No"
                  control={
                    <Radio
                      checked={form.cardiovascular === 'No'}
                      onChange={handleChange('cardiovascular')}
                      value="No"
                    />
                  }
                  label="No"
                />
                <FormControlLabel
                  value="Yes"
                  control={
                    <Radio
                      checked={form.cardiovascular === 'Yes'}
                      onChange={handleChange('cardiovascular')}
                      value="Yes"
                    />
                  }
                  label="Yes"
                />
                <FormControlLabel
                  value="I don't know"
                  control={
                    <Radio
                      checked={form.cardiovascular === "I don't know"}
                      onChange={handleChange('cardiovascular')}
                      value="I don't know"
                    />
                  }
                  label="I don't know"
                />
              </RadioGroup>
            </Box>
            <br />

            <Box>
              <FormLabel required for="postalCode">
                Do you have any other illnesses that you would like our
                specialists to know about?
              </FormLabel>
              <br />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="birthYear"
                name="birthYear"
                autoFocus
                value={form.ilnesses}
                onChange={handleChange('ilnesses')}
              />
            </Box>
          </form>
        );
      case 2:
        return (
          <Box>
            <Typography variant="h6" className={classes.title}>
              Postal code: {form.postalCode}
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Year of birth: {form.birthYear}
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Blood type: {form.bloodGroup}
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Tested for COVID-19: {form.tested}
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Fiabetes: {form.diabetes}
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Asthma: {form.asthma}
            </Typography>
            <Typography variant="h6" className={classes.title}>
              cardiovascular diseases: {form.cardiovascular}
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Other: {form.ilnesses}
            </Typography>
          </Box>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Box>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box></Box>
      <Box>
        <Box>
          <Grid container direction="column" alignItems="center">
            <Box>
              <h2>Screening form</h2>
              <br />
              {getStepContent(activeStep)}
            </Box>
            <Box>
              <br />
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
              <br />
              <br />
              <br />
              <br />
            </Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ScreeningForm;
