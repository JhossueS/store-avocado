import { Container, CssBaseline } from '@mui/material';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth='md'>
        <div>
          Hey
        </div>

      </Container>
    </>
  );
};

export default App;
