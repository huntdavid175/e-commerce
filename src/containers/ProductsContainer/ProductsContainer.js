import React, { Component } from "react";
import ProductCard from "../../components/Products/ProductCard";
import classes from "./ProductsContainer.module.css";
import axios from "axios";
import Spinner from "../../components/UI/Spinner/Spinner";

class ProductsContainer extends Component {
  state = {
    products: [],
  };

  

  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      this.setState({
        products: response.data,
      });
    });
  }

  selectProductHandler = (id) => {
    console.log(id);
  };
  render() {
      let products = <Spinner />;

      if(this.state.products.length > 0) {
        products = this.state.products.map((product) => (
            <ProductCard
              key={product.id}
              productId={product.id}
              title={product.title}
              price={product.price}
              imgUrl={product.image}
              clicked={this.props.clicked}
            />
          ));
      }


    return (
      <div>
        <h1 style={{ marginBottom: "55px" }}> Blood is thicker than water </h1>
        <div className={classes.Products}>
          { products }
        </div>
      </div>
    );
  }
}

export default ProductsContainer;
