import { useContext, useState, useEffect } from "react";
import TodoContext from "../context/TodoContext";

const TodoAdd = () => {
  const { setModalFunc } = useContext(TodoContext);

  return (
    <div className="py-4 flex justify-between items-center px-6 rounded-t border-b dark:border-gray-600">
      <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
        Todo
      </h3>
      <button
        type="button"
        onClick={() => setModalFunc()}
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoAdd;
