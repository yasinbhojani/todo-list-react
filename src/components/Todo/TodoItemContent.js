import React, { useContext } from "react";
import TodoContext from "../../context/todo-context";

import classes from "./TodoItemContent.module.css";

const TodoItemContent = (props) => {
  const todoCtx = useContext(TodoContext);
  const checkBoxChangeHandler = () => {
    todoCtx.completeTodo(props.id);
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
        {props.description !== "" ? (
          <p className={classes.description}>{props.description}</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TodoItemContent;
