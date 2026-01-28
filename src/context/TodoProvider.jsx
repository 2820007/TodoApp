import { createContext, useReducer } from "react";

export const TodoContext=createContext()

const  initialState={}
const todoReducer=(state,action)=>{
    switch(action.type){
        case "default":{
            return state
        }
    }

}

export const TodoProvider=({children})=>{

    const [state,dispatch]=useReducer(todoReducer,initialState)
    return (
        <TodoContext.Provider value={{state,dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}

