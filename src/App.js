import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import ProductsContainer from "./containers/ProductsContainer/ProductsContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <ProductsContainer />
        </Layout>
      </div>
    );
  }
}

export default App;
