import React from 'react';

export default function TodoFormButton({ setTodoForm }) {
  return (
    <div className="create-todo">

      <button
        type="button"
        onClick={() => { setTodoForm(true); }}
      >
        Create a todo.
      </button>
    </div>
  );
}