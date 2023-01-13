import { useContext, useState } from "react"
import { TodoListContext } from "./context"

import EditTodo from "./EditTodo.js"

import './styles/TodoList.scss'


export default function TodoList() {
	const {todoList, setTodoList} = useContext(TodoListContext);

	const [editView, setEditView] = useState(false)
	const [editableTodo, setEditableTodo] = useState([])

	// Function to delete todo
	const delelteTodo = (todoToDelete) => {
		setTodoList(todoList.filter(todo => todo !== todoToDelete))
	}

	// Function to change the status of todo
	const changeTodoStatus = (todoToUpdate) =>{
		setTodoList(todoList.map(todo => todo === todoToUpdate ? {...todoToUpdate, status: !todoToUpdate.status} : todo))
	}

	// Function to call component to edit todo
	const updateTodo = (todoToUpdate) => {
		setEditView(true)
		setEditableTodo(todoToUpdate)
 	}

	if (editView){
		return <EditTodo editableToDo = {editableTodo} setEditView = {setEditView}/>
	}
	else{
		return (
			<div className='todo-list'>
				{todoList.map((todo, index) => ( 
					<div className="todo-list__row tpdo">
						<div className="todo__details">
							<input type="checkbox" checked={todo.status} onChange={() => changeTodoStatus(todo)}></input>
							<div key={index} className = {`todo__title todo__title--${todo.status ? "isCompleted" : ""}`}>{todo.task} </div> 
						</div>

						<div className="todo__operations">
							<button onClick={() => updateTodo(todo)}>Edit</button>
							<button onClick={() => delelteTodo(todo)}>Delete</button>
						</div>
					</div>
				))}
    		</div>
		
		);
	}
};