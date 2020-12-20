import React, { Component } from "react";
import SingleProductBar from "../../components/SingleProduct/SingleProductBar/SingleProductBar";
import Spring from "../../components/Layout/Spring";
import SingleProductDescription from "../../components/SingleProduct/SingleProductDescription/SingleProductDescription";

class SingleProduct extends Component {
  render() {
    return (
      <div>
        <Spring>
          <SingleProductBar />
          <SingleProductDescription />
        </Spring>
      </div>
    );
  }
}

export default SingleProduct;
