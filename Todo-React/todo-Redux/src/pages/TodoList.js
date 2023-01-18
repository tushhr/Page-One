import React from 'react';
import { useSelector } from 'react-redux';

import Todo from './Todo';
import { TODO_LIST } from '../utils/constants';
import '../styles/TodoList.scss';

export default function TodoList() {
  const { todoList } = useSelector((state) => state.todoStore);

  return (
    <div className="todo-list">
      <header className="todo-list__header headerr">{TODO_LIST.header}</header>
      {Object.values(todoList).map((todo) => (
        <div className="todo-list">
          <div className="todo-list__row todo">
            <Todo todo={todo} />
          </div>
        </div>
      ))}
    </div>
  );
}