import { useContext, useEffect } from "react"
import { TodoListContext } from "./context"

export default function TodoList() {
	const {todoList, setTodoList} = useContext(TodoListContext);

	const delelteTodo = (todo) => {
		setTodoList(todoList.filter((tmp) => {return tmp !== todo}))
	}

	const changeStatusTodo = (todo) =>{
		setTodoList(todoList.map(e => 
				e == todo ? {...todo, status: !todo.status} : e
			))
	}

	return (
		<div className='todos-list'>
        	{todoList.map((todo, index) => ( 
          		<div>
					<input type="checkbox" checked={todo.status} onChange={() => changeStatusTodo(todo)}></input>
           			<p key={index} className = {todo.status ? "hidden" : "show"}>{todo.task} </p> 
					<button onClick={() => delelteTodo(todo)}>Delete</button>
				</div> 
			))}
    	</div>
    );
};