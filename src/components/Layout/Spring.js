import React from "react";
import classes from "./Spring.module.css";

const Spring = (props) => {
  return <div className={classes.Spring}>{props.children}</div>;
};

export default Spring;
