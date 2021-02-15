import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import ProductsList from './components/ProductsList'
import Cart from './components/Cart'
import Default from './components/Default'

class App extends Component {
  render(){
    return(
      <React.Fragment>
        <Navbar/>
          <Switch>

            <Route exact path="/">
              <ProductsList/>
            </Route>

            <Route exact path="/cart">
              <Cart/>
            </Route>

            <Route>
              <Default/>
            </Route>
            
          </Switch>
      </React.Fragment>
    );
  }
}

export default App;
