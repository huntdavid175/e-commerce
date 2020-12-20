import React from "react";
import classes from "./SingleProductDescription.module.css"

const SingleProductDescription = (props) => {
  return (
    <div className={classes.Description}>
      <h3>Product Description</h3>
      <p>
        The perfect accessory for a desk or bedside table of any modern house.
        The shade can be tilted to suit your needs and is replaceable extending
        the life of your lamp.
      </p>
    </div>
  );
};

export default SingleProductDescription;
