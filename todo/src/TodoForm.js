import { useContext } from "react"
import { TodoContext } from "./context"

import './styles/TodoForm.scss'

export default function TodoForm() {

    const {todo, todoList, setTodo, setTodoList} = useContext(TodoContext);

    const modifyTodoInput = (e) => setTodo(e.target.value);
    const addTodoItem = (e) => {
        e.preventDefault();

        let id = 0;
        if(todoList.length){
            id = todoList[todoList.length - 1].id + 1
        }

        const newTodo = {
            id: id,
            task: todo,
            status: false,
        };
        setTodoList([...todoList, newTodo]);

        setTodo("");
    };

    return (
        <form className='todo-form' onSubmit={addTodoItem}>
            <input type="text" className="todo-form__input" id="todo-inputBox" placeholder="Add any new todo" value={todo} onChange={modifyTodoInput}/>
            <button id="todo-submitButton" className="todo-form__button">Add todo!</button>
        </form>
    )
};