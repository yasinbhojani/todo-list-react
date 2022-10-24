import React, { useContext, useState } from "react";

import Card from "../UI/Card";
import Input from "../UI/Input";
import TodoContext from "../../context/todo-context";
import classes from "./Form.module.css";

const Form = () => {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");

  const todoCtx = useContext(TodoContext);

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    if (heading.trim() === "") {
      alert("Can't add empty todo!");
    }

    if (heading.trim() !== "") {
      todoCtx.addTodo({ heading: heading, description: description });

      setHeading("");
      setDescription("");
    }
  };

  return (
    <form className={classes.form} onSubmit={onFormSubmitHandler}>
      <Card>
        <Input
          type="text"
          placeholder="Heading"
          value={heading}
          onChange={(e) => {
            setHeading(e.target.value);
          }}
        />
        <Input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button className={classes.btn}>Add Todo ➕</button>
      </Card>
    </form>
  );
};

export default Form;
