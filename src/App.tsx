import React, { useState } from "react";

import { ToDo } from "./models/todo.model";

import ToDoList from "./components/ToDoList";
import NewToDo from "./components/NewToDo";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos(prevState => [...prevState, { id: Math.random().toString(), text }]);
  };

  return (
    <div className="App">
      <NewToDo onAddTodo={addTodoHandler} />
      <ToDoList items={todos} />
    </div>
  );
};

export default App;
