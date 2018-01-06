import React, { Component } from 'react';
import { 
  Header, 
  Grid, 
  Card, 
  Segment, 
  Image, 
  Icon,
  Container,
  Button, 
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import Burger from '../images/burger.jpg';
import { 
  fetchProducts, 
  addToCart, 
  editProduct, 
  deleteProduct, 
} from '../actions/products';
import product from './Product';
import axios from 'axios';

// let cartChoices = []

class Product extends Component {
  
  render() {
    let { title, description, price, id, dispatch } = this.props;
    return(
      <Card>
        <Image src={Burger} />
        <Card.Content>
          <Card.Header>
            {title}
          </Card.Header>
          <Card.Description>
            {description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          $ {price}
          <hr />
          <Button onClick={ () => dispatch(addToCart(id))}>Add to Cart</Button>
          <hr />
          <Button primary onClick={ () => dispatch(editProduct(id))}>Edit</Button>
          <Button color='red' onClick={ () => dispatch(deleteProduct(id)) }>Delete</Button>
        </Card.Content>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    user: state.user,
    cart: state.carts,
  }
}

export default connect(mapStateToProps)(Product);