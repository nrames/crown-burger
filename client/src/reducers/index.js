import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import products from './products';
import carts from './carts';

const rootReducer = combineReducers({
  user,
  flash,
  products,
  carts,
});

export default rootReducer;
