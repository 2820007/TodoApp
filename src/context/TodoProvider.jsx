import { createContext, useReducer } from "react";

export const TodoContext = createContext();

const initialState = {
  todos: [],
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "addTodo": {
      const isExist = state.todos.find((item) => {
        return item.id == action.payload.id;
      });
      if (isExist) {
        return state;
      } else {
        const newTodo = [...state.todos, action.payload];
        return {
          todos: newTodo,
        };
      }
    }
    case "deleteTodo": {
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload.id),
      };
    }
    case "updateTodo": {
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id
            ? { ...item, title: action.payload.title }
            : item,
        ),
      };
    }

    case "default": {
      return state;
    }
  }
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
