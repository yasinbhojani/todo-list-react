import React from "react";

import Card from "../UI/Card";
import Input from "../UI/Input";
import classes from "./Form.module.css";

const Form = () => {
  return (
    <form className={classes.form}>
      <Card>
        <Input type="text" placeholder="Heading" />
        <Input type="text" placeholder="Description" inputtype="large" />
        <button className={classes.btn}>Add Todo ➕</button>
      </Card>
    </form>
  );
};

export default Form;
