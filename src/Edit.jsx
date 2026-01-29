import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TodoContext } from "./context/TodoProvider";


function EditTodo() {
  const navigate = useNavigate();
  const location = useLocation();
  const todoData = location.state; 

  const { dispatch } = useContext(TodoContext);

  const [todo, setTodo] = useState(todoData?.title || "");
  const [todoError, setTodoError] = useState("");

  if (!todoData) {
    navigate("/todo");
    return null;
  }

  const handleUpdate = () => {
    if (!todo.trim()) {
      setTodoError("Todo cannot be empty!");
      return;
    }

    dispatch({
      type: "updateTodo",
      payload: {
        id: todoData.id,
        title: todo,
      },
    });

    navigate("/todo");
  };

  return (
    <div>
      <div className="p-10 flex justify-center gap-x-4">
        <input
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
            setTodoError("");
          }}
          className="border-2 bg-white shadow outline-none w-90 p-3 rounded-2xl"
          type="text"
          placeholder="Enter Task.."
        />

        <button
          onClick={handleUpdate}
          className="bg-orange-500 p-3 text-white rounded-sm cursor-pointer"
        >
          Edit Todo
        </button>
      </div>

      {todoError && (
        <p className="italic font-bold text-sm text-center text-red-500">
          {todoError}
        </p>
      )}
    </div>
  );
}

export default EditTodo;
