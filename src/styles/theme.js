import { createMuiTheme } from '@material-ui/core/styles';
import { lightBlue, teal } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal['400'],
    },
    secondary: {
      main: lightBlue['A700'],
    },
  },
});

export default theme;
