import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  let input = null;
  switch (props.elementType) {
    case "input":
      input = (
        <input
          className={classes.Input}
          {...props.elementConfig}
          name={props.name}
          value={props.value}
          onChange={props.clicked}
        />
      );
      break;
    case "textarea":
      input = (
        <textarea
          className={classes.Input}
          {...props.elementConfig}
          name={props.name}
          value={props.value}
          onChange={props.clicked}
        />
      );
      break;

    default:
      <input
        className={classes.Input}
        {...props.elementConfig}
        name={props.name}
        value={props.value}
        onChange={(event) => props.clicked(event, props.name)}
      />;
  }

  return (
    <div className={classes.Formgroup}>
      <label className={classes.Label}>{props.labelName}:</label>
      {input}
    </div>
  );
};

export default Input;
