import React from "react";
import classes from "./SingleProductDescription.module.css";

const SingleProductDescription = (props) => {
  return (
    <div className={classes.Description}>
      <h3>Product Description</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default SingleProductDescription;
