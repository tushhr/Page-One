import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addTodoItem } from '../stores/todo';
import { TODO_FORM} from '../utils/constants';
import '../styles/TodoForm.scss';

export default function TodoForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newTodo, setNewTodo] = useState({ task: '', desc: '' });

  const addTodo = () => {
    dispatch(addTodoItem(newTodo));
    console.log("first")
    navigate('/');
  };

  return (
    <div className="todo-form">
      <header className="todo-form__header headerr">{TODO_FORM.header}</header>
      <div className="todo-form__fields">
        <input
          type="text"
          className="todo-form__input"
          placeholder={TODO_FORM.form.task}
          value={newTodo.task}
          onChange={(e) => setNewTodo({ ...newTodo, task: e.target.value })}
        />

        <textarea
          type="text"
          className="todo-form__input todo-form__desc"
          placeholder={TODO_FORM.form.desc}
          value={newTodo.desc}
          onChange={(e) => setNewTodo({ ...newTodo, desc: e.target.value })}
        />
      </div>

      <button
        type="submit"
        id="todo-submit-button"
        className="todo-form__button btn btn-primary"
        onClick={addTodo}
      >
        Add todo!
      </button>
    </div>
  );
}
