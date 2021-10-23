import { Box, CircularProgress } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';
import CardFruit from '../CardFruit';

const ListCardsFruits = () => {
  const { products, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { getAvocados } = bindActionCreators(actionCreators, dispatch);

  if (products.length === 0 && loading === false) {
    getAvocados();
  }

  if (loading) {
    return (
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        height: '80vh',
      }}
      >
        <CircularProgress sx={{ color: 'red' }} />
      </Box>
    );
  }

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    }}
    >
      {
      products.map((product) => (
        <CardFruit
          key={product.id}
          img={product.image}
          name={product.name}
          price={product.price}
          id={product.id}
        />
      ))
      }
    </Box>
  );
};

export default ListCardsFruits;
