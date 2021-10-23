import {
  Box, Button, useMediaQuery,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useTheme } from '@mui/material/styles';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../state/index';

const ButtonAddCart = ({ id }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const dispatch = useDispatch();
  const { addToCart } = bindActionCreators(actionCreators, dispatch);

  const handleAddToCart = () => {
    addToCart(id);
  };
  return (
    <>
      <Box>
        <Button
          type='button'
          onClick={handleAddToCart}
          variant='contained'
          size='small'
          sx={{ marginTop: matches ? '0' : '10px' }}
        >
          <AddShoppingCartIcon />
          {' '}
          Add to cart
        </Button>
      </Box>
    </>
  );
};

export default ButtonAddCart;
