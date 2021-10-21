import { Alert, AlertTitle } from '@mui/material';

const Checkout = () => {
  return (
    <>
      <Alert severity='warning'>
        <AlertTitle>Your cart is empty</AlertTitle>
        You will need to add some items to the cart before you can checkout.
      </Alert>
    </>
  );
};

export default Checkout;
