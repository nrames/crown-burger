import React, { Component } from 'react';
import { Header, Segment, Image } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <Segment basic style={styles.mainCanvas}>
        <Header as='h1' textAlign='center'>Home</Header>
      </Segment>  
    );
  }
}

const styles = {
  mainCanvas: {
    background: 'yellow',
    backgroundSize: 'cover',
    padding: 0,
    height: '100vh'
  },
}

export default Home;
