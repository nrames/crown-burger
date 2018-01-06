import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import products from './products';
import locations from './locations';
import carts from './carts';

const rootReducer = combineReducers({
  user,
  flash,
  products,
  locations,
  carts,
});

export default rootReducer;
