import React from "react";
import classes from "./SingleProductBar.module.css";

const SingleProductBar = (props) => {
  const { image, price, title } = props.data;
  return (
    <div className={classes.SingleProduct}>
      <div>
        <img src={image} alt={title}></img>
      </div>

      <div className={classes.Info}>
        <div className={classes.InfoSection}>
          <div>
            <h2>{title}</h2>
          </div>
          <div>
            <h3>{`$${price}`}</h3>
          </div>
          <div>
            <p>
              <span>SKDU:8934u938</span>
            </p>
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
