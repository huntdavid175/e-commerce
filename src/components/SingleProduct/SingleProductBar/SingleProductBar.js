import React from "react";
import classes from "./SingleProductBar.module.css";

const SingleProductBar = (props) => {
  return (
    <div className={classes.SingleProduct}>
        <div>
        <img
        src="https://parmsang.github.io/gatsby-starter-ecommerce/static/13eae8f7d28eeb66a999d20f919a4d72/59139/a0063567-2c2a-4546-ba34-7709991ef8f8.png"
        alt=""
      ></img>
        </div>
      
      <div className={classes.Info}>
        <div className={classes.InfoSection}>
          <div>
            <h2>Product Name</h2>
          </div>
          <div>
            <h3>Product Price</h3>
          </div>
          <div>
            <p><span>SKDU:8934u938</span></p>
          </div>

          <div>
            <input type="number"></input>
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductBar;
