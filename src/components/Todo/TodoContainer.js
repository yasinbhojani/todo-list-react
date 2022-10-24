import React, { useContext } from "react";
import TodoContext from "../../context/todo-context";
import Card from "../UI/Card";

import classes from "./TodoContainer.module.css";
import TodoItem from "./TodoItem";

const TodoContainer = (props) => {
  const todoCtx = useContext(TodoContext);

  const mappedTodos = [...todoCtx.todos].reverse().map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        id={todo.id}
        heading={todo.heading}
        description={todo.description}
        isComplete={todo.isComplete}
      />
    );
  });

  return (
    <div className={classes.container}>
      <Card>
        <ul className={classes["todo-items"]}>{mappedTodos}</ul>
      </Card>
    </div>
  );
};

export default TodoContainer;
