import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './utils/Theme';

const ROOT = document.getElementById('root');

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>, ROOT,
);
