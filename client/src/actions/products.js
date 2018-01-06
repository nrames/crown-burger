import axios from 'axios';
import { setFlash } from './flash';

const setProducts = (products) => {
  return { type: 'SET_PRODUCTS', products }
}

export const fetchProducts = () => {
  return dispatch => {
    axios.get('/api/products')
      .then( res => {
        dispatch(setProducts(res.data));
        console.log(res.data)
      })
      .catch( err => {
        dispatch(setFlash('Error fetching inputs. Try again.', 'red'));
        console.log(err)
    });
  }
}