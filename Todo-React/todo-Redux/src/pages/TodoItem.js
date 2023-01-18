import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Todo from '../pages/Todo';
import { TODO_ITEM } from '../utils/constants';

export default function TodoItem() {
  const { id } = useParams();
  const { todoList } = useSelector((state) => state.todoStore);
  const todoItem = todoList[id];

  return (
    <div>
      <header className="edit-form__header headerr">{TODO_ITEM.header}</header>
      <Todo todo={todoItem} />
    </div>
  );
}
