import { Typography } from '@mui/material';

import ListCardsFruits from '../components/ListCardsFruits';
import useLogged from '../hooks/useLogged';

const Home = () => {
  useLogged(true);
  return (
    <>
      <Typography variant='h2' align='center'>Fruits Store</Typography>
      <ListCardsFruits />
    </>
  );
};

export default Home;
