import React, { useReducer } from "react";
import TodoContext from "./todo-context";

// const defaultTodoReducervalue = {
//   items: [
//     {
//       id: "td1",
//       heading: "Complete Homework",
//       description:
//         "Complete the homework of Data Structures and Algorithms before 1/1/23",
//       isComplete: true,
//     },
//     {
//       id: "td2",
//       heading: "Go Grocery Shopping",
//       description: "Go before evening",
//       isComplete: false,
//     },
//     {
//       id: "td3",
//       heading: "Play Games",
//       description: "Play Minecraft With Friends for 1 hour",
//       isComplete: false,
//     },
//   ],
//   totalItems: 3,
// };

const defaultTodoReducervalue = {
  items: [],
  totalItems: 0,
};

const TodoReducer = (state, action) => {
  if (action.type === "ADD") {
    const newData = {
      id: Math.random().toString(),
      heading: action.data.heading,
      description: action.data.description,
      isComplete: false,
    };

    let newTotal = state.totalItems + 1;

    const newState = {
      items: [newData, ...state.items],
      totalItems: newTotal,
    };

    return newState;
  }

  if (action.type === "REMOVE") {
    const newTodos = state.items.filter((item) => {
      if (item.id === action.id) {
        return false;
      }
      return true;
    });

    const newTotal = state.totalItems - 1;

    const newState = {
      items: newTodos,
      totalItems: newTotal,
    };

    return newState;
  }

  if (action.type === "EDIT") {
    const ItemIndex = state.items.findIndex((item) => {
      if (item.id === action.id) {
        return true;
      }
      return false;
    });

    const newItem = { ...state.items[ItemIndex] };

    if (action.heading !== newItem.heading) {
      newItem.heading = action.heading;
    }

    if (action.description !== newItem.description) {
      newItem.description = action.description;
    }

    const newItems = [...state.items];
    newItems[ItemIndex] = newItem;

    const newState = {
      items: newItems,
      totalItems: state.totalItems,
    };

    return newState;
  }

  if (action.type === "COMPLETE") {
    const ItemIndex = state.items.findIndex((item) => {
      if (item.id === action.id) {
        return true;
      }
      return false;
    });

    const newItem = { ...state.items[ItemIndex] };
    newItem.isComplete = !newItem.isComplete;

    const newItems = [...state.items];
    newItems[ItemIndex] = newItem;

    const newState = {
      items: newItems,
      totalItems: state.totalItems,
    };

    return newState;
  }

  return defaultTodoReducervalue;
};

const TodoContextProvider = ({ children }) => {
  const [todos, dispatchTodo] = useReducer(TodoReducer, defaultTodoReducervalue);

  const addTodoHandler = (data) => {
    dispatchTodo({ type: "ADD", data: data });
  };

  const deleteTodoHandler = (id) => {
    dispatchTodo({ type: "REMOVE", id: id });
  };

  const completeTodoHandler = (id) => {
    dispatchTodo({ type: "COMPLETE", id: id });
  };

  const editTodoHandler = (id, heading, description) => {
    dispatchTodo({
      type: "EDIT",
      id: id,
      heading: heading,
      description: description,
    });
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
