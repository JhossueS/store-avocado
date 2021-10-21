import { Typography } from '@mui/material';

import ListCardsFruits from '../components/ListCardsFruits';

const Home = () => {
  return (
    <>
      <Typography variant='h2' align='center'>Fruits Store</Typography>
      <ListCardsFruits />
    </>
  );
};

export default Home;
