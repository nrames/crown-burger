import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Locations from './Locations';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import Cart from './Cart';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import Menu from './Menu';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/locations' component={Locations} />
            <Route exact path='/menu' component={Menu} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route exact path='/menu' component={Menu} />
            <ProtectedRoute exact path='/cart' component={Cart} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
