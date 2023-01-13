import { useContext } from "react"
import { TodoListContext } from "./context"

export default function TodoList() {
	const {todoList, setTodoList} = useContext(TodoListContext);
	
	const delelteTodo = (todo) => {
		console.log("Han delete kr do!!", todo)

		setTodoList(todoList.filter((tmp) => {return tmp !== todo}))
	}

	return (
		<div className='todos-list'>
        	{todoList.map((todo, index) => ( 
          		<div> 
           			<p key={index} className = {todo.status ? "hidden" : "show"}>{todo.task} </p> 
					<button onClick={() => delelteTodo(todo) }>Delete</button>
				</div> 
			))}
    	</div>
    );
};