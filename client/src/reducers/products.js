const products = (state = [], action) => {
  switch(action.type) {
    case 'SET_PRODUCTS':
      return action.products
    case 'SET_PRODUCT':
      return action.product
    case 'EDIT_PRODUCT':
      return action.product
    case 'DELETE_PRODUCT':
      return state.filter( p => p.id !== action.id )
    default:
      return state;
  }
}

export default products;