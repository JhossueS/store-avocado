import { createTheme } from '@mui/material/styles';

const ThemeProvider = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#F8F8FF',
    },
    warning: {
      main: '#ff0000',
    },
    error: {
      main: '#f49636',
    },
    background: {
      default: '#ffffff',
      paper: '#F8F8FF',
    },
  },
});

export default ThemeProvider;
