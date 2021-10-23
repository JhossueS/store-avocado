import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import papperBag from '../../assets/images/paper-bag.png';

const Cart = ({ sm }) => {
  const { totalProduct } = useSelector((state) => state.cart);
  return (
    <>
      {sm ? null : <img src={papperBag} alt='papperBag' width={40} />}
      <Typography>
        {' '}
        Cart (
        {totalProduct}
        )
        {' '}
      </Typography>
    </>
  );
};

export default Cart;
