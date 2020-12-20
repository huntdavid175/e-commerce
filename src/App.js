import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
// import ProductsContainer from "./containers/ProductsContainer/ProductsContainer";
import SingleProduct from "./containers/SingleProduct/SingleProduct";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          {/* <ProductsContainer /> */}
          <SingleProduct />
        </Layout>
      </div>
    );
  }
}

export default App;
