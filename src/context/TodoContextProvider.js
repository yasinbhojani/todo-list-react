import React, { useReducer } from "react";
import TodoContext from "./todo-context";

const todoSampleStruct = {
  items: [
    {
      id: "td1",
      heading: "Complete Homework",
      description:
        "Complete the homework of Data Structures and Algorithms before 1/1/23",
      isComplete: true,
    },
    {
      id: "td2",
      heading: "Go Grocery Shopping",
      description: "Go With Sis before evening",
      isComplete: false,
    },
    {
      id: "td3",
      heading: "Play Games",
      description: "Play Minecraft With Friends Before Midnight",
      isComplete: false,
    },
  ],
  totalItems: 3,
};

const defaultTodoReducervalue = {
  items: [],
  totalItems: 0,
};

const TodoReducer = (state, action) => {
  if (action.type === "ADD") {
  }

  return defaultTodoReducervalue;
};

const TodoContextProvider = ({ children }) => {
  const [todos, dispatchTodo] = useReducer(TodoReducer, todoSampleStruct);

  const addTodoHandler = (data) => {
    dispatchTodo({ type: "ADD", data: data });
  };
  const deleteTodoHandler = (id) => {
    dispatchTodo({ type: "REMOVE", id: id });
  };
  const completeTodoHandler = (id) => {
    dispatchTodo({ type: "STATUS", id: id });
  };
  const editTodoHandler = (id, newContent) => {
    dispatchTodo({ type: "EDIT", value: { id: id, newContent: newContent } });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: todos.items,
        totalTodos: todos.totalItems,
        addTodo: addTodoHandler,
        deleteTodo: deleteTodoHandler,
        completeTodo: completeTodoHandler,
        editTodo: editTodoHandler,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
