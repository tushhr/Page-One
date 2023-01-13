import { useContext } from "react"
import { TodoContext, TodoListContext, TodoDescContext } from "./context"

import './styles/TodoForm.scss'

export default function TodoForm({setTodoForm}) {

    const {todo, setTodo} = useContext(TodoContext);
    const {todoList, setTodoList} = useContext(TodoListContext);
    const {todoDesc, setTodoDesc} = useContext(TodoDescContext);

    // const modifyTodoInput = (e) => ;
    const addTodoItem = (e) => {
        e.preventDefault();

        let id = 0;
        if(todoList.length){
            id = todoList[todoList.length - 1].id + 1
        }

        const newTodo = {
            id: id,
            task: todo,
            desc: todoDesc,
            status: false,
        };
        setTodoList([...todoList, newTodo]);

        setTodo("");
        setTodoDesc("");

        setTodoForm(false);
    };

    return (
        <form className='todo-form' onSubmit={addTodoItem}>
            <div className="todo-form__fields">
                <input type="text" className="todo-form__input" placeholder="Add any new todo" value={todo} onChange={(e) => setTodo(e.target.value)}/>
                <textarea type="text" className="todo-form__input todo-form__desc" placeholder="Write description here..." value={todoDesc} onChange={(e) => setTodoDesc(e.target.value)}/>
            </div>
            <button id="todo-submitButton" className="todo-form__button">Add todo!</button>
        </form>
    )
};