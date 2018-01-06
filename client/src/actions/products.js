import axios from 'axios';
import { setFlash } from './flash';

const setProducts = (products) => {
  return { type: 'SET_PRODUCTS', products }
}

const setProduct = (product) => {
  return { type: 'SET_PRODUCT', product }
}

export const deleteProduct = (id) => {
  return {type: 'DELETE_PRODUCT', id }
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

export const addToCart = (id) => {
  return dispatch => {
    axios.post('/api/carts')
      .then( res => {
        dispatch(setProduct(res.data));
        console.log(res.data)
      })
      .catch( err => {
        setFlash('Error posting product. Try again.', 'red');
        console.log(err)
      })

  }
}

// export const editProduct = () => {
//   return dispatch => {
//   axios.put(`/api/products/${this.id}`)
//     .then( res => {
//       this.setState(res.data)
//       console.log(res.data)
//     })
//     .catch( err => {
//       console.log(err)
//     })
//   }
// }

// export const deleteProduct = () => {
//   axios.delete(`/api/products/${this.id}`)
//   .then( res => {
//     this.setState(res.data)
//   })
//   .catch( err => {
//     console.log(err)
//     })
// }