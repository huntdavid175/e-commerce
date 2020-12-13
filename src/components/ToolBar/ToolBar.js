import React from "react";
import NavigationItems from "./NavigationItems/NavigationItems";
import classes from "./Toolbar.module.css";

const ToolBar = (props) => {
  return (
    <div className={classes.ToolBar}>
      <NavigationItems />
    </div>
  );
};

export default ToolBar;
