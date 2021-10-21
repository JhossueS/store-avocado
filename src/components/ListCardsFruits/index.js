import { Box } from '@mui/material';
import CardFruit from '../CardFruit';

const ListCardsFruits = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    }}
    >
      {
      [1, 1, 1, 1, 1].map(() => (
        <CardFruit />
      ))
      }
    </Box>
  );
};

export default ListCardsFruits;
