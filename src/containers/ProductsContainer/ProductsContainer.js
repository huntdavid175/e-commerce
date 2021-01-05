import React, { Component } from "react";
import ProductCard from "../../components/Products/ProductCard";
import classes from "./ProductsContainer.module.css";
import axios from "../../axios-products";
import Spinner from "../../components/UI/Spinner/Spinner";
import { Link } from "react-router-dom";

class ProductsContainer extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios
      .get("/products")
      .then((response) => {
        this.setState({
          products: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  selectProductHandler = (id) => {
    console.log(id);
  };
  render() {
    let products = <Spinner />;

    if (this.state.products.length > 0) {
      products = this.state.products.map((product) => (
        <Link to={"/products/" + product.id} key={product.id}>
          <ProductCard
            productId={product.id}
            title={product.title}
            price={product.price}
            imgUrl={product.image}
            // clicked={this.props.clicked}
          />
        </Link>
      ));
    }

    return (
      <div>
        <h1 style={{ marginBottom: "55px" }}> Blood is thicker than water </h1>
        <div className={classes.Products}>{products}</div>
      </div>
    );
  }
}

export default ProductsContainer;
