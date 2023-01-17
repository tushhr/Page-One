import React, { useState } from 'react';

import { useTodoListContext } from '../context/TodoListContext';

import '../styles/TodoForm.scss';

export default function EditTodo({ editableTodo, setEditView }) {
  const { editTodoItem } = useTodoListContext();

  const { id, task, desc } = editableTodo;
  const [oldTodoId, oldTodoTask, oldTodoDesc] = [id, task, desc];

  // Updating our new todo, with the old todo's task
  const [newTodoTask, setNewTodoTask] = useState(oldTodoTask);
  const [newTodoDesc, setNewTodoDesc] = useState(oldTodoDesc);

  // Update Todo list according to the updated todo-task
  const updateTodoItem = () => {
    editTodoItem(oldTodoId, newTodoTask, newTodoDesc);
    setEditView(false);
  };

  return (
    <>
      <div className="todo-form__fields">
        <input
          type="text"
          className="todo-form__input"
          placeholder="Add any new todo"
          onChange={(e) => setNewTodoTask(e.target.value)}
          value={newTodoTask}
        />

        <textarea
          type="text"
          className="todo-form__input todo-form__desc"
          placeholder="Write description here..."
          onChange={(e) => setNewTodoDesc(e.target.value)}
          value={newTodoDesc}
        />
      </div>

      <button
        type="button"
        id="todo-submitButton"
        className="todo-form__button"
        onClick={() => updateTodoItem()}
      >
        Update!
      </button>
    </>
  );
}