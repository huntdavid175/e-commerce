import React, { Component } from "react";
import SingleProductBar from "../../components/SingleProduct/SingleProductBar/SingleProductBar";
import Spring from "../../components/Layout/Spring";
import SingleProductDescription from "../../components/SingleProduct/SingleProductDescription/SingleProductDescription";
import axios from "../../axios-products";

class SingleProduct extends Component {
  state = {
    product: null,
  };

  componentDidMount() {
    axios.get(this.props.match.url).then((res) => {
      this.setState({
        product: res.data,
      });
    });
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        {this.state.product != null ? (
          <Spring>
            <SingleProductBar data={this.state.product} />
            <SingleProductDescription
              description={this.state.product.description}
            />
          </Spring>
        ) : null}
      </div>
    );
  }
}

export default SingleProduct;
