import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { TodoListProvider } from './context/TodoListContext';

ReactDOM.render(
  <TodoListProvider>
    <App />
  </TodoListProvider>,
  document.getElementById('root'),
);