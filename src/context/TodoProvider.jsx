import { createContext, useEffect, useReducer } from "react";

export const TodoContext = createContext();
const getData=()=>{
  let data=localStorage.getItem("todos")
  return data? JSON.parse(data):[]
}

const initialState = {
  todos: getData(),
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
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(state.todos))
  })
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
