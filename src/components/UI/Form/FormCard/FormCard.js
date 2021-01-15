import React from "react";
import classes from "./FormCard.module.css";

const FormCard = (props) => {
  return (
    <div className={classes.Form}>
      <form>{props.children}</form>
    </div>
  );
};

export default FormCard;
