import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import products from './products';
import locations from './locations';

const rootReducer = combineReducers({
  user,
  flash,
  products,
  locations,
});

export default rootReducer;
