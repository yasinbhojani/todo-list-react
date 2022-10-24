import React, { useContext } from "react";
import TodoContext from "../../context/todo-context";
import Card from "../UI/Card";

import classes from "./TodoContainer.module.css";
import TodoItem from "./TodoItem";

const TodoContainer = (props) => {
  const todoCtx = useContext(TodoContext);

  const filterTodos = (todos, completed) => {
    return todos
      .filter((todo) => {
        if (todo.isComplete) {
          return completed;
        }
        return !completed;
      })
      .map((todo) => {
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
  };

  const incompleteTodos = filterTodos(todoCtx.todos, false);
  const completeTodos = filterTodos(todoCtx.todos, true);

  return (
    <div className={classes.container}>
      {todoCtx.todos.length === 0 ? (
        ""
      ) : (
        <Card>
          <ul className={classes["todo-items"]}>
            {incompleteTodos}
            {completeTodos}
          </ul>
        </Card>
      )}
    </div>
  );
};

export default TodoContainer;
