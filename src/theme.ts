// import { Roboto } from '@next/font/google';
import { createTheme } from '@mui/material/styles';



// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#007FFF',
    },
    secondary: {
      main: 'rgb(75,85,99)',
      contrastText: "#fff"
    }
  },
});

export default theme;