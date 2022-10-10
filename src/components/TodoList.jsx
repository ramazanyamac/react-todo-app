import { useContext } from "react";
import TodoContext from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todo } = useContext(TodoContext);
  return (
    <div>
      {todo.length > 0 ? (
        <ul className="my-4 space-y-3">
          {todo.map((item) => (
            <TodoItem key={item.id} todo={item} />
          ))}
        </ul>
      ) : (
        <div
          className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
          role="alert"
        >
          Nothing to do
        </div>
      )}
    </div>
  );
};

export default TodoList;
