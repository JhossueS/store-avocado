import {
  Box, OutlinedInput, Button, useMediaQuery,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useTheme } from '@mui/material/styles';

const ButtonBuy = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <>
      <Box sx={{
        display: matches ? 'flex' : 'block',
        alignItems: 'center',
        margin: '20px 0',
        gap: '24px',
      }}
      >
        <OutlinedInput
          id='filled-adornment-amount'
          type='number'
          size='small'
        />
        <Button variant='contained' size='small' sx={{ marginTop: matches ? '0' : '10px' }}>
          <AddShoppingCartIcon />
          {' '}
          Add to cart
        </Button>
      </Box>
    </>
  );
};

export default ButtonBuy;
