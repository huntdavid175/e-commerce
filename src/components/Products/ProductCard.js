import React from "react";
import classes from './ProductCard.module.css'

const productCard = (props) => {
  return (
    <div className={classes.Product}>
     
        <img src="https://parmsang.github.io/gatsby-starter-ecommerce/static/13eae8f7d28eeb66a999d20f919a4d72/59139/a0063567-2c2a-4546-ba34-7709991ef8f8.png" alt=""></img>
     
      <div className={classes.TextArea}>
          <h2>Product 1</h2>
          <p>Price</p>
      </div>
    </div>
  );
};

export default productCard;
