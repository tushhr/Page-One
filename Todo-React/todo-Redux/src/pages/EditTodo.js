import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { editTodoItem } from '../stores/todo';
import { EDIT_TODO } from '../utils/constants';
import '../styles/TodoForm.scss';

export default function EditTodo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetching details from storage
  const { id } = useParams();
  const { todoList } = useSelector((state) => state.todoStore);

  const {
    id: oldTodoId,
    task: oldTodoTask,
    desc: oldTodoDesc,
  } = todoList[id];

  // Updating our new todo, with the old todo's task
  const [newTodo, setNewTodo] = useState({
    id: oldTodoId,
    task: oldTodoTask,
    desc: oldTodoDesc,
  });

  // Update Todo list according to the updated todo-task
  const updateTodoItem = () => {
    dispatch(editTodoItem(newTodo));
    navigate('/');
  };

  return (
    <div className="edit-form">
      <header className="edit-form__header headerr">
        {EDIT_TODO.header}
      </header>
      <div className="todo-form__fields">
        <input
          type="text"
          className="todo-form__input"
          placeholder={EDIT_TODO.form.task}
          onChange={(e) => setNewTodo({ ...newTodo, task: e.target.value })}
          value={newTodo.task}
        />

        <textarea
          type="text"
          className="todo-form__input todo-form__desc"
          placeholder={EDIT_TODO.form.desc}
          onChange={(e) => setNewTodo({ ...newTodo, desc: e.target.value })}
          value={newTodo.desc}
        />
      </div>

      <button
        type="button"
        id="todo-submit-button"
        className="todo-form__button btn btn-primary"
        onClick={() => updateTodoItem()}
      >
        Update!
      </button>
    </div>
  );
}