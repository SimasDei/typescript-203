import React from "react";

import ToDoList from "./components/ToDoList";
import NewToDo from "./components/NewToDo";

const todos = [
  {
    id: "1",
    text: "Todo Text"
  }
];

const App: React.FC = () => {
  return (
    <div className="App">
      <NewToDo />
      <ToDoList items={todos} />
    </div>
  );
};

export default App;
