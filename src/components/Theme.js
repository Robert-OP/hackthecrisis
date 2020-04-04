import {
    createMuiTheme,
    makeStyles,
    ThemeProvider
} from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
    palette: {
        primary: orange,
        secondary: green
    }
});

export default theme;