import React, { Component } from 'react';
import { Menu, Image, Container } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import logo_small from '../images/crown-burger-logo-large.png'

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Link to='/cart'>
            <Menu.Item 
            icon='cart'
            name='Cart' 
            />
          </Link>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position='right'>
        <Link to='/register'>
          <Menu.Item name='Sign Up' />
        </Link>
        <Link to='/login'>
          <Menu.Item name='Login' />
        </Link>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <Container>
        <Menu stackable fixed='top'> 
          <Link to='/'>
            <Menu.Item>
              <Image src={logo_small} size='mini'/>
            </Menu.Item> 
          </Link>
          <Link to='/menu'>
            <Menu.Item active name='MENU' />
          </Link>    
          <Link to='/locations'>
            <Menu.Item name='LOCATIONS' />
          </Link>
          <Link to='/about'>
            <Menu.Item name='ABOUT' />
          </Link>  
          { this.rightNavs() }
        </Menu>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
