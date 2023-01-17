import React, { useState } from 'react';

import { useTodoListContext } from '../context/TodoListContext';

import '../styles/TodoForm.scss';

export default function TodoForm({ setTodoForm }) {
  const { addTodoItem } = useTodoListContext();

  const [newTodoTask, setNewTodoTask] = useState('');
  const [newTodoDesc, setNewTodoDesc] = useState('');

  const addTodo = () => {
    addTodoItem(newTodoTask, newTodoDesc);

    setNewTodoTask('');
    setNewTodoDesc('');

    setTodoForm(false);
  };

  return (
    <div className="todo-form">
      <div className="todo-form__fields">
        <input
          type="text"
          className="todo-form__input"
          placeholder="Add any new todo"
          value={newTodoTask}
          onChange={(e) => setNewTodoTask(e.target.value)}
        />

        <textarea
          type="text"
          className="todo-form__input todo-form__desc"
          placeholder="Write description here..."
          value={newTodoDesc}
          onChange={(e) => setNewTodoDesc(e.target.value)}
        />
      </div>

      <button
        type="submit"
        id="todo-submitButton"
        className="todo-form__button"
        onClick={addTodo}
      >
        Add todo!
      </button>
    </div>
  );
}