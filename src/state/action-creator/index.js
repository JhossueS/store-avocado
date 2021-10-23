import axios from 'axios';

export const getAvocados = () => async (dispatch) => {
  dispatch({
    type: 'GET_PRODUCTS_LOADING',
  });

  try {
    const { data: avocados } = await axios.get('https://api-avocado-store.vercel.app/api/avocados');
    dispatch({
      type: 'GET_PRODUCTS',
      payload: avocados.data,
    });
  } catch {
    dispatch({
      type: 'GET_PRODUCTS_ERROR',
    });
  }
};
