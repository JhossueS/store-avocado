import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import theme from './utils/Theme';
import AppRouter from './routes/Router';

const ROOT = document.getElementById('root');
const history = createBrowserHistory();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <AppRouter />
    </Router>
  </ThemeProvider>, ROOT,
);
