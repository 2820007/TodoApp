import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "./context/TodoProvider";
import { useNavigate } from "react-router-dom";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todoError, setTodoError] = useState("");
  const { state, dispatch } = useContext(TodoContext);
  const navigate=useNavigate()
  const addTodo = () => {
    if (todo.length <= 0) {
      setTodoError("Most Be Some characters in the input field !* ");
      return;
    }
    dispatch({
      type: "addTodo",
      payload: {
        id: uuidv4(),
        title: todo,
      },
    });
    setTodo("");
  };

  console.log(state.todos);
  return (
    <div className=" w-[70%]   m-auto mt-20 p-5 bg-gray-200">
      <div className="      ">
        <div className=" gap-x-4   flex  justify-center ">
          <label htmlFor="">
            <input
              value={todo}
              onChange={(e) => {
                setTodo(e.target.value);
                setTodoError("");
              }}
              required
              className="  bg-white shadow outline-none w-full p-3 rounded-2xl"
              type="text"
              placeholder="Enter Task.."
            />
          </label>
          <button
            onClick={() => {
              addTodo();
            }}
            className="bg-orange-500 p-3  text-white rounded-sm cursor-pointer"
          >
            Add Todo
          </button>
        </div>

        {todoError.length > 0 && (
          <p className="  italic  font-bold text-sm text-center text-red-500 ">
            {todoError}
          </p>
        )}
      </div>

      <div className="  space-y-4  p-4">
        {state.todos.length > 0 ? (
          <>
            {state.todos.map((item) => {
              return (
                <div
                  key={item.id}
                  className="bg-white flex   justify-between   items-center shadow-2xl rounded-xl  px-5 p-3"
                >
                  <h1>{item.title}</h1>

                  <div className="space-x-3">
                    <button
                      onClick={() =>
                        dispatch({
                          type: "deleteTodo",
                          payload: {
                            id: item.id,
                          },
                        })
                      }
                      className="bg-red-500 p-2  rounded-xl  text-white cursor-pointer  "
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        navigate("/editTodo",{state:item})
                      }}
                      className="bg-green-500 p-2  rounded-xl  text-white cursor-pointer  "
                    >
                      Edit
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <div className="font-bold flex gap-1 justify-center text-2xl text-center italic text-red-700">
            <h1>There is no todo to show </h1>
            <img
              className="rounded-full w-8"
              src="
         https://png.pngtree.com/png-vector/20241102/ourmid/pngtree-crying-sad-emoji-png-image_14216691.png            "
              alt=""
            />
            !
          </div>
        )}
      </div>
    </div>
  );
}

export default Todo;
// crud
// create, read , update , delete
