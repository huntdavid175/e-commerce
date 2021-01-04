import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ProductsContainer from "./containers/ProductsContainer/ProductsContainer";
import SingleProduct from "./containers/SingleProduct/SingleProduct";
import CartContainer from "./containers/CartContainer/CartContainer";

class App extends Component {
  state = {
    productId: null,
  };

  productIdHandler = (id) => {
    this.setState(
      {
        productId: id,
      },
      () => console.log(this.state.productId)
    );
  };

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route
              path="/"
              exact
              component={() => (
                <ProductsContainer clicked={this.productIdHandler.bind(this)} />
              )}
            />
            <Route path="/cart" component={CartContainer} />
            <Route path="/single-product" component={SingleProduct} />
          </Switch>
          {/* <SingleProduct /> */}
          {/* <CartContainer /> */}
        </Layout>
      </div>
    );
  }
}

export default App;
