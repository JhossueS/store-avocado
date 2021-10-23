import {
  Alert, AlertTitle, Box, Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import CardCheckout from '../components/CardCheckout';

const Checkout = () => {
  const { products, totalPrice } = useSelector((state) => state.cart);
  const arrayProducts = Object.values(products);

  return (
    <>
      <Typography variant='h4' component='h2'>
        Cart
      </Typography>
      <Box sx={{ height: arrayProducts.length <= 5 ? '80vh' : 'auto', maxWidth: '650px', margin: '0 auto' }}>
        {Object.keys(products).length <= 0
          ? (
            <Alert severity='warning'>
              <AlertTitle>Your cart is empty</AlertTitle>
              You will need to add some items to the cart before you can checkout.
            </Alert>
          )
          : null}
        {arrayProducts.map((product) => (
          <CardCheckout
            key={product.id}
            img={product.image}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            id={product.id}
          />
        ))}
      </Box>
      <Typography variant='body1' component='p'>
        Total Price:
        {' '}
        {totalPrice.toFixed(2)}
      </Typography>
    </>
  );
};

export default Checkout;
