import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";
import Spring from "../../Layout/Spring";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const NavigationItems = (props) => {
  return (
    <Spring>
      <ul className={classes.NavigationItems}>
        <NavigationItem>Sign up</NavigationItem>
        <NavigationItem>Sign in</NavigationItem>
        <NavLink to="/cart">
          <NavigationItem>
            <FiShoppingCart style={{ marginRight: "3px" }} />
            Cart (0)
          </NavigationItem>
        </NavLink>
      </ul>
    </Spring>
  );
};

export default NavigationItems;
