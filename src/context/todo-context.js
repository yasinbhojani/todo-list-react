import React from "react";

const TodoContext = React.createContext({
  todos: [],
  totalTodos: 0,
  addTodo: (data) => {},
  deleteTodo: (id) => {},
  completeTodo: (id) => {},
  editTodo: (id, newContent) => {}
});

export default TodoContext;
