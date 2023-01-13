import { useContext, useState } from "react"
import { TodoListContext } from "./context"



export default function EditTodo({editableToDo, setEditView}) {
	const {todoList, setTodoList} = useContext(TodoListContext);

    const {id, task} = editableToDo;
    const [oldTodoId, oldTodoTask] = [id, task];   
    
    // Updating our new todo, with the old todo's task
    const [newTodo, setNewTodo] = useState(oldTodoTask);

    
    const modifyTodoInput = (e) => {setNewTodo(e.target.value)};

    // Update Todo list according to the updated todo-task
    const updateTodoItem = (e) => {
        let tmpTodoList = todoList.filter(todo => todo.id === oldTodoId ? todo.task = newTodo : todo);
        
        setTodoList(tmpTodoList);
        setEditView(false);
    };
    
    return (
        <>
            <input type="text" className="todo-form__input" id="todo-inputBox" placeholder="Add any new todo" onChange={modifyTodoInput} value={newTodo}/>
            <button id="todo-submitButton" className="todo-form__button" onClick={() => updateTodoItem()}>Update!</button>
        </>
    );
}