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

export const registerUser = (dataForm) => async (dispatch) => {
  dispatch({
    type: 'GET_USER_LOADING',
  });
  try {
    const { data } = await axios.post('https://api-avocado-store.vercel.app/api/auth/register', dataForm);

    dispatch({
      type: 'REGISTER_USER',
      payload: data,
    });
  } catch {
    dispatch({
      type: 'GET_USER_ERROR',
    });
  }
};

export const loginUser = (dataForm) => async (dispatch) => {
  dispatch({
    type: 'GET_USER_LOADING',
  });
  try {
    const { data } = await axios.post('https://api-avocado-store.vercel.app/api/auth/login', dataForm);

    dispatch({
      type: 'REGISTER_USER',
      payload: data,
    });
  } catch {
    dispatch({
      type: 'GET_USER_ERROR',
    });
  }
};

export const addToCart = (id) => async (dispatch, getState) => {
  const { cart, products } = await getState();
  // find id product
  const product = products.products.find((prod) => {
    return prod.id === id;
  });

  const totalPrice = cart.totalPrice + product.price;
  const quantity = 1;
  // existing cart ?
  const existingCartItem = cart.products[product.id];
  // if existing add quantity + 1
  if (existingCartItem !== undefined) {
    const quantityAdd = cart.products[product.id].quantity + 1;
    const payload = {
      ...cart,
      totalProduct: cart.totalProduct + 1,
      products: { ...cart.products, [product.id]: { ...product, quantity: quantityAdd } },
      totalPrice,
    };
    return dispatch({
      type: 'ADD_TO_CART',
      payload,
    });
  }
  // if not exsisting prodoct in cart add key id and quantity
  const payload = {
    ...cart,
    totalProduct: cart.totalProduct + 1,
    products: {
      ...cart.products,
      [product.id]: {
        ...product,
        quantity,
      },
    },
    totalPrice,
  };

  return dispatch({
    type: 'ADD_TO_CART',
    payload,
  });
};

export const removeItemCart = (id) => async (dispatch, getState) => {
  const { cart } = await getState();

  const { products, totalProduct, totalPrice } = { ...cart };

  // find remove quantity item delete
  const removeTotalProduct = totalProduct - products[id].quantity;
  // get price procuts
  const productTotalPrice = products[id].quantity * products[id].price;
  // remove price products of cart
  const removeTotalPrice = totalPrice - productTotalPrice;

  const payload = {
    ...cart,
    product: delete products[id],
    totalProduct: removeTotalProduct,
    totalPrice: removeTotalPrice,
  };

  dispatch({
    type: 'REMOVE_ITEM_CART',
    payload,
  });
};
