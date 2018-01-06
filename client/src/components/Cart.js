import React, {Component} from 'react';
import { 
        Header, 
        Grid, 
        Segment,
        Button,
        Icon,
        Step,
        Divider,
        Table
      } from 'semantic-ui-react';

class Cart extends Component {
  render() {
    return (
      <Segment padded>
      <Header as='h1'textAlign='center'>Shopping Cart</Header>
        <Grid>
          <Grid.Row>
            <Step.Group fluid>
              <Step completed>
                <Icon name='shop' />
                <Step.Content>
                  <Step.Title>Items Added</Step.Title>
                </Step.Content>
              </Step>
              <Step completed>
                <Icon name='credit card' />
                <Step.Content>
                  <Step.Title>Billing</Step.Title>
                </Step.Content>
              </Step>
              <Step disabled>
                <Icon name='info circle' />
                <Step.Content>
                  <Step.Title>Confirm Order</Step.Title>
                </Step.Content>
              </Step>
            </Step.Group>
          </Grid.Row>
          <Grid.Row>  
            <Table>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Items</Table.HeaderCell>
                  <Table.HeaderCell>Quantity</Table.HeaderCell>
                  <Table.HeaderCell>Price</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell as='item'>
                  </Table.Cell>
                  <Table.Cell as='quantity'>
                  </Table.Cell>
                  <Table.Cell as='price'>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Row>  
          <Grid.Row>    
            <Grid.Column mobile={16} tablet={8} computer={4}>  
              <Button.Group>
                <Button>Edit Cart</Button>
                <Button.Or />
                <Button positive>Checkout</Button>
              </Button.Group>
            </Grid.Column>
          </Grid.Row>        
        </Grid>
      </Segment>    
    );
  }
}

export default Cart;