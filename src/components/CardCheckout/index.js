import {
  Card, CardMedia, Box, CardContent, Typography, Button,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';

const CardCheckout = ({
  img, name, price, quantity, id,
}) => {
  const dispatch = useDispatch();
  const { removeItemCart } = bindActionCreators(actionCreators, dispatch);

  const handleRemoveItem = () => {
    removeItemCart(id);
  };

  const totalValue = price * quantity;
  return (
    <Card sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: '12px 0',
    }}
    >
      <CardMedia
        component='img'
        sx={{ width: 151 }}
        image={img}
        alt={name}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          <Typography variant='h5' component='h3'>
            {name}
          </Typography>
          <Typography variant='body2' component='p'>
            {price}
          </Typography>
          <Typography variant='body2' component='p'>
            quantity:
            {' '}
            {quantity}
          </Typography>
          <Typography variant='body2' component='p'>
            total value:
            {' '}
            {totalValue.toFixed(2)}
          </Typography>
        </CardContent>
      </Box>
      <Button type='button' size='small' onClick={handleRemoveItem}>
        <DeleteIcon sx={{ color: '#727275' }} />
      </Button>
    </Card>
  );
};

export default CardCheckout;
