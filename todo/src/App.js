import { useState } from 'react';

import { TodoContext, TodoListContext } from './context';
import TodoForm from "./TodoForm.js";
import TodoList from './TodoList.js';

import './App.css';


function App() {
	const [todo, setTodo] = useState("");
	const [todoList, setTodoList] = useState([])

	return (
		<div className="App">
			<header className="App-header">React To Do App</header>

			<div className='todo-container'>

				<TodoContext.Provider value = {{todo, todoList, setTodo, setTodoList}}>
					<TodoForm />
				</TodoContext.Provider>

				<TodoListContext.Provider value = {{todoList,setTodoList}}>
					<h1>hEKK1</h1>
					<TodoList />
				</TodoListContext.Provider>

			</div> 
		</div>
  );
}

export default App;
