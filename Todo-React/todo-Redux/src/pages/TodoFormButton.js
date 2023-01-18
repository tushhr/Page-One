import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TodoFormButton() {
  const navigate = useNavigate();

  const handleTodoForm = () => {
    navigate('/create');
  };

  return (
    <div className="create-todo">
      <button
        type="button"
        onClick={() => { handleTodoForm(); }}
        className="btn btn-primary"
      >
        Create a todo.
      </button>
    </div>
  );
}
