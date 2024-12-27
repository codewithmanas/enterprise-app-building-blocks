import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { TodoProps } from "./data/todos.ts";

function App() {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const addTodos = (todo: TodoProps) => {
      setTodos(prevTodos => (
        [...prevTodos, todo]
      ));
  }

  const toggleComplete = (id: string) => {
      const newTodos = todos.map(todo => {
        if(todo.id == id) {
          todo.completed = !todo.completed;
        }

        return todo

      });
      
      setTodos(newTodos);
  }

  const deleteTodo = (id: string) => {
      const newTodos = todos.filter(todo => todo.id !== id);
      
      setTodos(newTodos);
  }

  return (
      <div className="max-w-3xl mx-auto mt-8 border-2 border-blue-600 p-4 rounded-md">
        <TodoInput addTodos={addTodos} />
        {todos.length !== 0 && <TodoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />}
      </div>
  );
}

export default App;
