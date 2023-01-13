import { useState } from 'react';

import { TodoContext, TodoListContext, TodoDescContext } from './context';
import TodoForm from "./TodoForm.js";
import TodoList from './TodoList.js';

import './App.scss';


function App() {
	const [todo, setTodo] = useState("");
	const [todoDesc, setTodoDesc] = useState("");
	const [todoList, setTodoList] = useState([])


	const [todoFom, setTodoForm] = useState(false)

	return (
		<div className="app">
			<header className="app__header">React To Do App</header>

			<div className='todo-container'>

				{todoFom ? 
					(
						<TodoListContext.Provider value = {{todoList,setTodoList}}>
						<TodoContext.Provider value = {{todo, todoDesc, setTodo}}>
						<TodoDescContext.Provider value = {{todoDesc, setTodoDesc}}>
							<TodoForm setTodoForm = {setTodoForm}/>
						</TodoDescContext.Provider>
						</TodoContext.Provider>
						</TodoListContext.Provider>
					)
					:
					(
						<>
							<div class="create-todo">
								<button  onClick={() => {setTodoForm(true)}}>Create a todo.</button>
							</div>

							<TodoListContext.Provider value = {{todoList,setTodoList}}>
								<TodoList />
							</TodoListContext.Provider>
						</>
					)
				}
			</div> 
		</div>
  );
}

export default App;
