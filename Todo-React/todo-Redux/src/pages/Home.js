import React from 'react';

import TodoFormButton from './TodoFormButton';
import TodoList from './TodoList';
import { HOME } from '../utils/constants';
import '../App.scss';

export default function Home() {
  console.log("first")
  return (
    <div>
      <header className="app__header headerr">{HOME.header}</header>
      <div className="todo-container">
        <TodoFormButton />
        <TodoList />
      </div>
    </div>
  );
}