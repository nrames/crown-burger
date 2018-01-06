import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Header, Segment, Button, Container, Image } from 'semantic-ui-react';
import hero_image from '../images/Pastrami_Burger_Hero.jpg';
import main_logo from '../images/crown-burger-logo-small.png';
import Menu from './Menu';

class Home extends Component {
  render() {
    return (
      <Segment textAlign='center' style={styles.hero}>
        <Container>
       
          <Image src={main_logo} style={styles.logo} />
          <Header
            as='h2'
            content='Home of the best pastrami burger'
            inverted
            style={{ fontSize: '1.7em', fontWeight: 'normal' }}
          />
          <Link to='/menu'>  
            <Button color='orange' size='huge'>Order Now</Button>
          </Link>  
        </Container>
      </Segment>  
    );
  }
}

const styles = {
  hero: {
    background: `url(${hero_image}) no-repeat center fixed`,
    backgroundSize: 'cover',
    padding: 0,
    height: '100vh'
  },

  logo: {
    margin: '0 auto',
    marginTop: '10em',
    height: '40vh'
  },
}

export default Home;


