import { useState } from 'react';

import { TodoContext, TodoListContext } from './context';
import TodoForm from "./TodoForm.js";
import TodoList from './TodoList.js';

import './App.scss';


function App() {
	const [todo, setTodo] = useState("");
	const [todoList, setTodoList] = useState([])

	return (
		<div className="app">
			<header className="app__header">React To Do App</header>

			<div className='todo-container'>

				<TodoContext.Provider value = {{todo, todoList, setTodo, setTodoList}}>
					<TodoForm />
				</TodoContext.Provider>

				<TodoListContext.Provider value = {{todoList,setTodoList}}>
					<TodoList />
				</TodoListContext.Provider>

			</div> 
		</div>
  );
}

export default App;
