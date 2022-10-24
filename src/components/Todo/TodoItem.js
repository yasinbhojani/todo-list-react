import React from "react";

import classes from "./TodoItem.module.css";
import EditSVG from "./../../assets/EditSVG";
import DeleteSVG from "../../assets/DeleteSVG";
import TodoItemContent from "./TodoItemContent";

const TodoItem = (props) => {
  return (
    <li className={classes["listitem"]}>
      <TodoItemContent
        heading={props.heading}
        description={props.description}
        isComplete={props.isComplete}
        id={props.id}
      />
      <div className={classes.controls}>
        <button>
          <EditSVG />
        </button>
        <button>
          <DeleteSVG />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
