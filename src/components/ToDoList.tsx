import React from "react";

interface ToDoListProps {
  items: { id: string; text: string }[];
}

const renderItems = (items: { id: string; text: string }[]) => (
  <ul>
    {items.map(todo => (
      <li key={todo.id}>{todo.text}</li>
    ))}
  </ul>
);

const ToDoList: React.FC<ToDoListProps> = ({ items }) => renderItems(items);

export default ToDoList;
