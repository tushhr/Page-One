import { useContext } from "react"
import { TodoContext } from "./context"

export default function TodoForm() {

    const {todo, todoList, setTodo, setTodoList} = useContext(TodoContext);

    const modifyTodoInput = (e) => setTodo(e.target.value);
    const addTodoItem = (e) => {
        e.preventDefault();

        const newTodo = {
            task: todo,
            status: false,
        };
        setTodoList([...todoList, newTodo]);

        setTodo("");
    };

    return (
        <div className='todo-form'>
            <form onSubmit={addTodoItem}>
                <input type="text" id="todo-inputBox" placeholder="Add any new todo" value={todo} onChange={modifyTodoInput}/>
                <button id="todo-submitButton" >Add todo!</button>
            </form>
        </div>
    )
};