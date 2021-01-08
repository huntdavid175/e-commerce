import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ProductsContainer from "./containers/ProductsContainer/ProductsContainer";
import SingleProduct from "./containers/SingleProduct/SingleProduct";
import CartContainer from "./containers/CartContainer/CartContainer";
import SignUpPage from "./containers/SignUp/SignUpPage";
import SignInPage from "./containers/SignIn/SignInPage";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={ProductsContainer} />
            <Route path="/cart" component={CartContainer} />
            <Route path="/sign-in" component={SignInPage} />
            <Route path="/sign-up" component={SignUpPage} />
            <Route path="/products/:id" component={SingleProduct} />
          </Switch>
          {/* <SingleProduct /> */}
          {/* <CartContainer /> */}
        </Layout>
      </div>
    );
  }
}

export default App;
