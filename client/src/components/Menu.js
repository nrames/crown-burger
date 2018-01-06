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
import { fetchProducts } from '../actions/products';
import Burger from '../images/burger.jpg'
import axios from 'axios';
import Product from './Product';

let cartChoices = []

class Menu extends Component {

  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  displayProducts = () => {
    return this.props.products.map( product => {
      return(
        <Product key={product.id} {...product} />
      );
    })
  }

  render() {
    return(
      <Container>
        <Segment basic>
          <Header textAlign='center' as='h1'>Menu</Header>
          <Card.Group stackable itemsPerRow={4}>
          {this.displayProducts() }
          </Card.Group>
        </Segment>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    user: state.user,
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Menu);
