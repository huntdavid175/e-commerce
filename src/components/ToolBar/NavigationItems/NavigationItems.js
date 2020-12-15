import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";
import Spring from "../../Layout/Spring";

const NavigationItems = (props) => {
  return (
    <Spring>
    <ul className={classes.NavigationItems}>
      <NavigationItem>Sign up</NavigationItem>
      <NavigationItem>Sign in</NavigationItem>
      <NavigationItem>Cart (0)</NavigationItem>
    </ul>
    </Spring>
  );
};

export default NavigationItems;
