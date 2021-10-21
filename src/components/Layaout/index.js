import { CssBaseline, Container } from '@mui/material';
import Footer from '../Footer';
import Header from '../Header';

const Layaout = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxWidth='md'>
        {children}
      </Container>
      <Footer />
      <CssBaseline />
    </>
  );
};

export default Layaout;
