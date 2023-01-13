import { useContext, useState } from "react"
import { TodoListContext } from "./context"

import './styles/TodoForm.scss'

export default function EditTodo({editableToDo, setEditView}) {
	const {todoList, setTodoList} = useContext(TodoListContext);

    const {id, task, desc} = editableToDo;
    const [oldTodoId, oldTodoTask, oldTodoDesc] = [id, task, desc];   

    // Updating our new todo, with the old todo's task
    const [newTodo, setNewTodo] = useState(oldTodoTask);
    const [newTodoDesc, setNewTodoDesc] = useState(oldTodoDesc);

    
    // const modifyTodoInput = (e)/ => {setNewTodo(e.target.value)};

    // Update Todo list according to the updated todo-task
    const updateTodoItem = (e) => {
        let tmpTodoList = todoList.filter(todo => todo.id === oldTodoId ? (todo.task = newTodo, todo.desc = newTodoDesc) : todo);
        
        setTodoList(tmpTodoList);
        setEditView(false);
    };
    
    return (
        <>
            <div className="todo-form__fields">
                <input type="text" className="todo-form__input" placeholder="Add any new todo" onChange={(e) => setNewTodo(e.target.value)} value={newTodo}/>
                <textarea type="text" className="todo-form__input todo-form__desc" placeholder="Write description here..." onChange={(e) => setNewTodoDesc(e.target.value)} value={newTodoDesc}/>
            </div>
            <button id="todo-submitButton" className="todo-form__button" onClick={() => updateTodoItem()}>Update!</button>
        </>
    );
}