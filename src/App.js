import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import {connect } from "react-redux";

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Logout from "./containers/auth/Logout/Logout";
import * as actions from './store/actions';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const asyncCheckout = asyncComponent(() => {
    return import('./containers/Checkout/Checkout')
});
const asyncOrders = asyncComponent(()  => {
    return import('./containers/Orders/Orders')
});
const asyncAuth = asyncComponent(()  => {
    return import('./containers/auth/Auth')
});

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoLogin();
  }

  render () {

      let routes = (
          <div>
              <Layout>
                  <Switch>
                  <Route path='/login' exact component={asyncAuth}/>
                  <Route path="/" exact component={BurgerBuilder} />
                  <Redirect to='/'/>
                  </Switch>
              </Layout>
          </div>
      );
      if(this.props.isAuthenticated) {
          routes = (
              <div>
                  <Layout>
                      <Switch>
                          <Route path="/checkout" component={asyncCheckout} />
                          <Route path="/orders" component={asyncOrders} />
                          <Route path='/login' exact component={asyncAuth}/>
                          <Route path="/logout" component={Logout} />
                          <Route path="/" exact component={BurgerBuilder} />
                      </Switch>
                  </Layout>
              </div>
          )
      }
    return routes;
  }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoLogin: () => dispatch(actions.authCheckState())
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
