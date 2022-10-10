import { v4 as uuidv } from 'uuid';
import { createContext, useState, useEffect } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState(JSON.parse(sessionStorage.getItem('todos')) || []);
  const [modal, setModal] = useState(false);

  // Set Modal
  const setModalFunc = () => {
    setModal(!modal)
  }

  // Add Todo
  const addTodo = (newTodo) => {
    newTodo.id = uuidv();
    newTodo.done = false
    setTodo([newTodo, ...todo])
    setModal(false)
  }

  // Delete Todo
  const deleteTodo = (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      setTodo(todo.filter(t => t.id !== id))
    }
  }

  // Update Todo
  const updatedTodo = (id) => {
    const updateTodo = todo.find((t) => t.id === id);

    if (updateTodo) {
      updateTodo.done = !updateTodo.done;
    }

    setTodo(todo.map(item => (item.id === id ? { ...item, ...updateTodo } : item)))
  }


  useEffect(() => {
    sessionStorage.setItem('todos', JSON.stringify(todo));
  }, [todo])

  return <TodoContext.Provider value={{ todo, addTodo, deleteTodo, updatedTodo, modal, setModalFunc }}>
    {children}
  </TodoContext.Provider>
}

export default TodoContext;