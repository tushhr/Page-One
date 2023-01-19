const initialState = {
  todoList: {},
  todoListLength: 0,
};

// Constants
const ADD_TODO_ITEM = '/create';
const EDIT_TODO_ITEM = '/edit';
const UPDATE_TODO_ITEM_STATUS = '/update-status';
const DELETE_TODO_ITEM = '/delete';

// Add a new todo item
export function addTodoItem({ task: newTodoTask, desc: newTodoDesc }) {
  return (dispatch, getState) => {
    const { todoListLength } = getState().todoStore;

    const newTodoItem = {
      id: todoListLength + 1,
      task: newTodoTask,
      desc: newTodoDesc,
      status: false,
    };

    dispatch({
      type: ADD_TODO_ITEM,
      payload: {
        newId: todoListLength + 1,
        newTodoItem,
        todoListLength: todoListLength + 1,
      },
    });
  };
}

// Edit any todo item: task & description
export function editTodoItem({ id, task: newTodoTask, desc: newTodoDesc }) {
  return (dispatch, getState) => {
    const { todoList: tmpTodoList } = getState().todoStore;
    tmpTodoList[id] = {
      ...tmpTodoList[id],
      task: newTodoTask,
      desc: newTodoDesc,
    };

    dispatch({
      type: EDIT_TODO_ITEM,
      payload: tmpTodoList,
    });
  };
}

// Update status of todo
export function updateTodoItemStatus(todoId) {
  return (dispatch, getState) => {
    const { todoList: tmpTodoList } = getState().todoStore;
    tmpTodoList[todoId] = {
      ...tmpTodoList[todoId],
      status: !tmpTodoList[todoId].status,
    };

    dispatch({
      type: UPDATE_TODO_ITEM_STATUS,
      payload: tmpTodoList,
    });
  };
}

// Delete a delete todo item
export function deleteTodoItem(todoId) {
  return (dispatch, getState) => {
    const { todoList: tmpTodoList } = getState().todoStore;

    delete tmpTodoList[todoId];
    dispatch({
      type: DELETE_TODO_ITEM,
      payload: tmpTodoList,
    });
  };
}

// Reducer...!
export default function todoStore(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_ITEM:
      return {
        ...state,
        todoList: {
          ...state.todoList,
          [action.payload.newId]: action.payload.newTodoItem,
        },
        todoListLength: action.payload.todoListLength,
      };
    case EDIT_TODO_ITEM:
      return {
        ...state,
        todoList: action.payload,
      };
    case UPDATE_TODO_ITEM_STATUS:
      return {
        ...state,
        todoList: action.payload,
      };
    case DELETE_TODO_ITEM:
      return {
        ...state,
        todoList: action.payload,
      };
    default:
      return state;
  }
}
