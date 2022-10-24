import React from "react";

import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import TodoContainer from "./components/Todo/TodoContainer";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="empty"></div>
        <Form />
        <TodoContainer />
      </main>
    </div>
  );
};

export default App;
