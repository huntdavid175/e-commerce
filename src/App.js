import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import ProductsContainer from "./containers/ProductsContainer/ProductsContainer";
// import SingleProduct from "./containers/SingleProduct/SingleProduct";
// import CartContainer from "./containers/CartContainer/CartContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <ProductsContainer />
          {/* <SingleProduct /> */}
          {/* <CartContainer /> */}
        </Layout>
      </div>
    );
  }
}

export default App;
