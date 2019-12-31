import React from 'react';

import ToDoList from './components/ToDoList';

const todos = [
  {
    id: '1',
    text: 'Todo Text',
  },
];

const App: React.FC = () => {
  return (
    <div className='App'>
      <ToDoList items={todos} />
    </div>
  );
};

export default App;
