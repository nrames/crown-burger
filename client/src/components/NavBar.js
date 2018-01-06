import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import logo_small from '../images/crown-burger-logo-small.png'

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
          <Menu.Item name='Register' />
        </Link>
        <Link to='/login'>
          <Menu.Item name='Login' />
        </Link>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <container>
        <Menu stackable pointing secondary> 
          <Link to='/'>
            <Menu.Item>
              <Image src={logo_small} size='tiny'/>
            </Menu.Item> 
          </Link>
<<<<<<< HEAD
          <Link to='/locations'>
            <Menu.Item name='locations' />
          </Link>
=======
          <Link to='/menu'>
            <Menu.Item name='Menu' />
          </Link>    
>>>>>>> origin/architect
          { this.rightNavs() }
        </Menu>
      </container>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
