import { TodoProps } from "../data/todos";

interface TodoListProps {
  todos: TodoProps[]
  deleteTodo: (id: string) => void
  toggleComplete: (id: string) => void
}

const Todo = ({ todo, deleteTodo, toggleComplete }: { todo: TodoProps, deleteTodo: (id: string) => void, toggleComplete: (id: string) => void}) => {
  return (
    <div className="flex items-center justify-between border-2 border-blue-400 p-2 rounded-md">
      <div className={`${todo.completed ? "line-through": ""}`}>{todo.title}</div>

      <div className="flex items-center gap-2">
        <button className="border-2 border-yellow-500 p-2 rounded-md"
          onClick={() => toggleComplete(todo.id)}
        >
          mark complete
        </button>
        <button className="border-2 border-red-500 p-2 rounded-md"
          onClick={() => deleteTodo(todo.id)}
        >
          delete
        </button>
      </div>
    </div>
  );
};

const TodoList = ({todos, deleteTodo, toggleComplete}: TodoListProps) => {
  return (
    <div className="flex flex-col gap-2 border-2 border-blue-600 p-4 rounded-md">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
      ))}
    </div>
  );
};

export default TodoList;
