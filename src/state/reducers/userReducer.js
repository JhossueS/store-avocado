const initalState = {
  user: [],
  loading: false,
  error: false,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
        error: null,
        loading: false,
      };

    case 'REGISTER_USER':
      return {
        ...state,
        user: action.payload,
        error: null,
        loading: false,
      };

    case 'GET_USER_LOADING':
      return { ...state, loading: true };

    case 'GET_USER_ERROR':
      return { ...state, error: 'user not found' };

    default:
      return state;
  }
};

export default reducer;
