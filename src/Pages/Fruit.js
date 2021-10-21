import {
  Box, Paper, Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';

import logo from '../assets/images/maluma.jpg';
import ButtonBuy from '../components/ButtonBuy';
import InfoFruit from '../components/InfoFruit';

const Fruit = () => {
  const x = useParams();
  console.log(x);
  return (
    <Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '50px',
      }}
      >
        <img
          src={logo}
          alt='avocado'
          style={{
            maxWidth: '330px',
            minWidth: '270px',
          }}
        />
        <Box sx={{
          maxWidth: '300px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
        >
          <Typography variant='h4' component='h2'>
            Maluma Hass Avocado
          </Typography>
          <Typography variant='body2' component='p'>
            1.15
          </Typography>
          <Paper elevation={10} sx={{ padding: '10px' }}>SKU: NUR72KCM</Paper>
          <ButtonBuy />
        </Box>
        <InfoFruit />
      </Box>
    </Box>
  );
};

export default Fruit;
