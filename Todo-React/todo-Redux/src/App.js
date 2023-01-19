import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  TodoForm,
  TodoList,
  Home,
  TodoItem,
  EditTodo,
} from './pages';
import { BASE_URL } from './utils/constants';

import './App.scss';

export default function App() {
  return (
    <div className="app">
      <Router basename={BASE_URL}>
        <Routes>
          <Route element={<Home />} exact path="/" />
          <Route element={<TodoForm />} path="/create" />
          <Route element={<TodoList />} path="/all" />
          <Route element={<TodoItem />} path="/view/:id" />
          <Route element={<EditTodo />} path="/edit/:id" />
        </Routes>
      </Router>
    </div>
  );
}