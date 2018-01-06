const carts = (state = [], action) => {
  switch(action.type) {
    case 'SET_CARTS':
      return action.carts
    default:
      return state;
  }
}

export default carts;