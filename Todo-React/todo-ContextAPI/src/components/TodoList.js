import React, { useState } from 'react';

import { useTodoListContext } from '../context/TodoListContext';

import EditTodo from '../components/EditTodo';

import '../styles/TodoList.scss';


export default function TodoList() {
  const {
    todoList, delelteTodoItem, updateTodoItemStatus,
  } = useTodoListContext();
  const [editableTodo, setEditableTodo] = useState([]);
  const [editView, setEditView] = useState(false);

  // Function to change the status of todo
  const changeTodoStatus = (todoToUpdateId) => {
    updateTodoItemStatus(todoToUpdateId);
  };

  // Function to call component to edit todo
  const updateTodo = (todoToUpdate) => {
    setEditableTodo(todoToUpdate);
    setEditView(true);
  };

  if (editView) {
    return <EditTodo editableTodo={editableTodo} setEditView={setEditView} />;
  } else {
    return (
      <div className="todo-list">
        {todoList.map((todo, index) => (
          <div className="todo-list__row todo">
            <div className="todo-list__header">
              <div className="todo__details">
                <input
                  type="checkbox"
                  checked={todo.status}
                  onChange={() => changeTodoStatus(todo.id)}
                />
                <div
                  key={index}
                  className={`todo__title 
                  todo__title--${todo.status ? 'isCompleted' : ''}`}
                >
                  {todo.task}
                </div>
              </div>
            </div>
            <div
              key={index}
              className={`todo__description 
              todo__title--${todo.status ? 'isCompleted' : ''}`}
            >
              {todo.desc}
            </div>
            <div className="todo__operations">
              <button
                type="button"
                onClick={() => updateTodo(todo)}
              >
                Edit
              </button>

              <button
                type="button"
                onClick={() => delelteTodoItem(todo.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}