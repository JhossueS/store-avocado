import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import userReducer from './userReducer';
import cartReducer from './cartReducer';

const reducers = combineReducers({
  products: productsReducer,
  user: userReducer,
  cart: cartReducer,
});

export default reducers;
