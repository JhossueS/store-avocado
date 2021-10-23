const initalState = {
  products: [],
  loading: false,
  error: false,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
        error: null,
        loading: false,
      };

    case 'GET_PRODUCTS_LOADING':
      return { ...state, loading: true };

    case 'GET_PRODUCTS_ERROR':
      return { ...state, error: 'avocados not found' };

    default:
      return state;
  }
};

export default reducer;
