import React from "react";

import classes from "./TodoItemContent.module.css";

const TodoItemContent = (props) => {
  const checkBoxChangeHandler = () => {
    console.log(props.id)
  };

  return (
    <div className={classes.container}>
      <input
        type="checkbox"
        checked={props.isComplete}
        onChange={checkBoxChangeHandler}
      />
      <div className={classes.content}>
        <p className={classes.heading}>{props.heading}</p>
        <p className={classes.description}>{props.description}</p>
      </div>
    </div>
  );
};

export default TodoItemContent;
