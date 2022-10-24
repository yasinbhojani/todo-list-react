import React, { useContext, useState } from "react";

import classes from "./TodoItem.module.css";
import EditSVG from "./../../assets/EditSVG";
import DeleteSVG from "../../assets/DeleteSVG";
import TodoItemContent from "./TodoItemContent";
import TodoContext from "../../context/todo-context";
import EditTodo from "../EditTodo/EditTodo";

const TodoItem = (props) => {
  const [editVisible, setEditVisible] = useState(false);

  const todoCtx = useContext(TodoContext);

  const deleteTodoHandler = () => {
    todoCtx.deleteTodo(props.id);
  };

  const EditBoxOpenHandler = () => {
    setEditVisible(true);
  };

  const EditBoxCloseHandler = () => {
    setEditVisible(false);
  };

  let classList = `${classes.listitem}`;

  if (props.isComplete) {
    classList = classList.concat(` ${classes.complete}`);
  }

  return (
    <>
      {editVisible && (
        <EditTodo
          id={props.id}
          heading={props.heading}
          description={props.description}
          onClose={EditBoxCloseHandler}
        />
      )}
      <li className={classList}>
        <TodoItemContent
          heading={props.heading}
          description={props.description}
          isComplete={props.isComplete}
          id={props.id}
        />
        <div className={classes.controls}>
          <button onClick={EditBoxOpenHandler}>
            <EditSVG />
          </button>
          <button onClick={deleteTodoHandler}>
            <DeleteSVG />
          </button>
        </div>
      </li>
    </>
  );
};

export default TodoItem;
