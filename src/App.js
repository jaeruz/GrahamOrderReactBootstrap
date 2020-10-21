import React, { Component } from 'react';
import { Button, Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/layout/MyNavbar'
import Dashboard from './components/dashboard/Dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateOrder from './components/project/CreateOrder';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MyNavbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/login' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateOrder} />
            {/* <Route path='/projects' component={CreateOrder} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
