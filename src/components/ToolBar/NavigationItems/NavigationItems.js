import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

const NavigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem>Sign up</NavigationItem>
      <NavigationItem>Sign up</NavigationItem>
      <NavigationItem>Cart (0)</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
