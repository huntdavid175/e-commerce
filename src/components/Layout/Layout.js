import React from "react";
import ToolBar from "../ToolBar/ToolBar";
import classes from "./Layout.module.css";
import Spring from "./Spring";

const Layout = (props) => {
  return (
    <div>
      <ToolBar />
      <Spring>
        <main className={classes.Layout}>{props.children}</main>
      </Spring>
    </div>
  );
};

export default Layout;
