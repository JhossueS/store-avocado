import {
  Box, Paper, Typography,
} from '@mui/material';

import ButtonBuy from '../ButtonBuy';

const CardFruitView = ({
  name, img, price, sku,
}) => {
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
          src={img}
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
            {name}
          </Typography>
          <Typography variant='body2' component='p'>
            {price}
          </Typography>
          <Paper elevation={10} sx={{ padding: '10px' }}>
            SKU:
            {' '}
            {sku}
          </Paper>
          <ButtonBuy />
        </Box>
      </Box>
    </Box>
  );
};

export default CardFruitView;
