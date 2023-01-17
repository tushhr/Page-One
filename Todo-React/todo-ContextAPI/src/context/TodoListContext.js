import React, { createContext, useContext, useState } from 'react';

const TodoListContext = createContext();

export const TodoListProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  // Add a new todo item
  const addTodoItem = (newTodoTask, newTodoDesc) => {
    let todoId = 0;
    if (todoList.length) {
      todoId = todoList[todoList.length - 1].id + 1;
    }

    const newTodoItem = {
      id: todoId,
      task: newTodoTask,
      desc: newTodoDesc,
      status: false,
    };

    setTodoList((prevState) => [...prevState, newTodoItem]);
  };

  // Edit any todo item: task & description
  const editTodoItem = (todoId, todoTask, todoDesc) => {
    const tmpTodoList = todoList.map(
      todo => (todo.id === todoId
        ? { ...todo, task: todoTask, desc: todoDesc }
        : todo),
    );
    setTodoList(tmpTodoList);
  };

  // Change status of todo item
  const updateTodoItemStatus = (todoId) => {
    setTodoList(
      todoList.map(
        todo => (todo.id === todoId
          ? { ...todo, status: !todo.status }
          : todo),
      ),
    );
  };

  // Delete a delete todo item
  const delelteTodoItem = (todoId) => {
    setTodoList(todoList.filter(todo => todo.id !== todoId));
  };

  return (
    <TodoListContext.Provider value={{
      todoList,
      setTodoList,
      addTodoItem,
      editTodoItem,
      delelteTodoItem,
      updateTodoItemStatus,
    }}
    >
      {children}
    </TodoListContext.Provider>
  );
};

export const useTodoListContext = () => useContext(TodoListContext);