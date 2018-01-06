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
import { fetchProducts } from '../actions/products';
import product from './Product';

// let cartChoices = []

class Product extends Component {

  addToCart = () => {
    this.props.cart.push(this.props.products)
    console.log(this.props.cart)
  }
  
  render() {
    let { title, description, price } = this.props;
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
          <Button onClick={this.addToCart()}>Add to Cart</Button>
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