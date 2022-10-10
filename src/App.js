import { TodoProvider } from './context/TodoContext';
import TodoList from './components/TodoList';
import TodoModal from './components/TodoModal';
import TodoAdd from './components/TodoAdd';

function App() {
  return (
    <TodoProvider>
      <div className="relative p-4 w-full mx-auto max-w-md h-screen">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <TodoAdd />
          <div className="p-6">
            <TodoList />
          </div>
        </div>
      </div>
      <TodoModal />
    </TodoProvider>
  );
}

export default App;
