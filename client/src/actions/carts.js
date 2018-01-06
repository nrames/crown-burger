import axios from 'axios';
import { setFlash } from './flash';

const carts = (carts) => {
  return { type: 'SET_CARTS', carts }
}

export const fetchCarts = () => {
  return dispatch => {
    axios.get('/api/carts')
      .then( res => {
        dispatch(setCarts(res.data));
        console.log(res.data)
      })
      .catch( err => {
        dispatch(setFlash('Error fetching inputs. Try again.', 'red'));
        console.log(err)
    });
  }
}