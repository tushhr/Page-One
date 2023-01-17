import React, { useState } from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFormButton from './components/TodoFormButton';

import './App.scss';


function App() {
  const [todoForm, setTodoForm] = useState(false);

  return (
    <div className="app">
      <header className="app__header">React To Do App</header>
      <div className="todo-container">
        { todoForm
          ? (
            <TodoForm setTodoForm={setTodoForm} />
          )
          : (
            <>
              <TodoFormButton setTodoForm={setTodoForm} />
              <TodoList />
            </>
          )}
      </div>
    </div>
  );
}

export default App;