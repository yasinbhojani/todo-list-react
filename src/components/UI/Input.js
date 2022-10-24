import React from "react";

import classes from "./Input.module.css"

const Input = (props) => {
  let classList = `${classes.input} `;
  if(props.inputtype === "large") {
    classList = classList.concat(`${classes["input--large"]}`)
  }

  return <input {...props} className={classList}/>;
};

export default Input;
