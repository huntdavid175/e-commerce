import React, { Component } from "react";
import CartItems from "../../components/Cart/CartItems/CartItems";
import CartTotal from "../../components/Cart/CartTotal/CartTotal";

class CartContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {/* <h1>Cart is Empty, Add some products</h1> */}
        <CartItems />
        <CartTotal />
      </div>
    );
  }
}

export default CartContainer;
