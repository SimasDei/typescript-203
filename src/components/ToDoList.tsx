import React from "react";

import { ToDo } from "../models/todo.model";

import "./ToDoList.css";

type onDeleteTodo = (todoId: string) => void;

interface ToDoListProps {
  items: ToDo[];
  onDeleteTodo: onDeleteTodo;
}

const renderItems = (items: ToDo[], onDeleteTodo: onDeleteTodo) => (
  <ul>
    {items.map(todo => (
      <li key={todo.id}>
        <span>{todo.text}</span>
        <button onClick={onDeleteTodo.bind(null, todo.id)}>Delete</button>
      </li>
    ))}
  </ul>
);

const ToDoList: React.FC<ToDoListProps> = ({ items, onDeleteTodo }) =>
  renderItems(items, onDeleteTodo);

export default ToDoList;
