import React, { useContext, useState } from "react";
import TodoContext from "../../context/todo-context";

import Input from "../UI/Input";
import Modal from "../UI/Modal";
import classes from "./EditTodo.module.css";

const EditTodo = (props) => {
  const [heading, setHeading] = useState(props.heading);
  const [description, setDescription] = useState(props.description);

  const todoCtx = useContext(TodoContext);

  const EditTodoSubmitHandler = (e) => {
    e.preventDefault();

    if (!(props.heading === heading && props.description === description)) {
      if(heading !== "") {
        todoCtx.editTodo(props.id, heading, description);
      } else {
        alert("can't leave the heading empty")
      }
    }
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={EditTodoSubmitHandler}>
        <Input
          type="text"
          placeholder="New Heading"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />
        <Input
          type="text"
          placeholder="New Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className={classes.btn}>Save Changes ✔️</button>
      </form>
    </Modal>
  );
};

export default EditTodo;
