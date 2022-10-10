import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import TodoContext from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { deleteTodo, updatedTodo } = useContext(TodoContext);
  return (
    <li>
      <div className="flex items-center justify-between w-full p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
        <div className="flex items-center">
          <input
            id={todo.id}
            type="checkbox"
            onChange={() => updatedTodo(todo.id)}
            defaultChecked={todo.done}
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          ></input>
          <label
            htmlFor={todo.id}
            className={`ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${
              todo.done ? "line-through" : ""
            }`}
          >
            {todo.text}
          </label>
        </div>
        <button
          onClick={() => deleteTodo(todo.id)}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <FaTrashAlt />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
