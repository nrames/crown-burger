import React, { Component } from 'react';
import { 
  Header, 
  Grid, 
  Card, 
  Segment, 
  Image, 
  Icon,
  Container, 
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/products';
import axios from 'axios';

class Menu extends Component {

  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  displayProducts = () => {
    return this.props.products.map( product => {
      return(
        <Card>
          <Image src={product.image} />
          <Card.Content>
            <Card.Header>
              {product.title}
            </Card.Header>
            <Card.Description>
              {product.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            $ {product.price}
          </Card.Content>
        </Card>
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
  }
}

export default connect(mapStateToProps)(Menu);
