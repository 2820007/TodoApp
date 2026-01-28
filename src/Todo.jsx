import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoError, setTodoError] = useState("");

  const addTodo = () => {
    if (todo.trim().length === 0) {
      setTodoError("Task must contain some characters!");
      return;
    }

    console.log(todo); 
    setTodo("");
    setTodoError("");
  };

  return (
    <div className="bg-gray-200 w-[60%] m-auto mt-20 flex flex-col gap-y-6">
      <div className="flex justify-center mt-4 p-6 gap-x-4">
        <input
          value={todo}   
          onChange={(e) => {
            setTodo(e.target.value);
            setTodoError(""); 
          }}
          className="w-100 bg-white outline-none rounded-sm p-4 shadow"
          type="text"
          placeholder="enter your task"
        />

        <button
          onClick={addTodo}
          className="bg-orange-600 text-white px-4 py-2 rounded-sm cursor-pointer"
        >
          Add Task
        </button>
      </div>

      {todoError && (
        <p className="text-red-600 text-center font-medium">
          {todoError}
        </p>
      )}

      <div className="space-y-4 p-4">
        <div className="flex justify-between border bg-white shadow-2xl rounded-2xl px-5 p-3">
          <h1>Task1</h1>
          <div className="space-x-3.5">
            <button className="bg-red-700 px-4 py-2 text-white rounded-sm">
              Delete
            </button>
            <button className="bg-blue-700 text-white px-4 py-2 rounded-sm">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
