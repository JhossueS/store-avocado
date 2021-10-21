import { Container, CssBaseline, Typography } from '@mui/material';
import Header from './components/Header';
import ListCardsFruits from './components/ListCardsFruits';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Container maxWidth='md'>
        <Typography variant='h2' align='center' marginTop='16px'>
          Fruits Store
        </Typography>
        <ListCardsFruits />
        <Footer />
      </Container>
      <CssBaseline />
    </>
  );
};

export default App;
