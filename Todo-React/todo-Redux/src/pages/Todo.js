import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { deleteTodoItem, updateTodoItemStatus } from '../stores/todo';

export default function Todo({ todo }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to change the status of todo
  const changeTodoStatus = (todoToUpdateId) => {
    dispatch(updateTodoItemStatus(todoToUpdateId));
  };

  // Function to call component to edit todo
  const updateTodo = (todoId) => {
    navigate(`/edit/${todoId}`);
  };

  const deleteTodo = (todoId) => {
    dispatch(deleteTodoItem(todoId));
  };

  return (
    <div>
      <div className="todo-list__header">
        <div className="todo__details">
          <input
            type="checkbox"
            checked={todo.status}
            onChange={() => changeTodoStatus(todo.id)}
          />
          <div
            key={todo.id}
            className={`todo__title 
                  todo__title--${todo.status ? 'isCompleted' : ''}`}
          >
            <a href={`/todo/view/${todo.id}`}>{todo.task}</a>
          </div>
        </div>
      </div>
      <div
        key={todo.id}
        className={`todo__description 
              todo__title--${todo.status ? 'isCompleted' : ''}`}
      >
        {todo.desc}
      </div>
      <div className="todo__operations">
        <button
          type="button"
          onClick={() => updateTodo(todo.id)}
          className="btn btn-outlined btn-success"
        >
          Edit
        </button>

        <button
          type="button"
          onClick={() => deleteTodo(todo.id)}
          className="btn btn-outlined btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
