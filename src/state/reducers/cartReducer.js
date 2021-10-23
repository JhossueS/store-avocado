const initalState = {
  products: [],
  totalPrice: 0,
  totalProduct: 0,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM_CART':
      return state = action.payload;

    case 'ADD_TO_CART':
      return state = action.payload;
    default: return state;
  }
};

export default reducer;
