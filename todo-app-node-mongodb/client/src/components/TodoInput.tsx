import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoProps } from "../data/todos";

const TodoInput = ({addTodos}: { addTodos: (todo: TodoProps) => void}) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        addTodos({
            id: uuidv4(),
            title: title,
            completed: false
        })

        setTitle("");
    }

  return (
    <form className="flex items-center justify-between gap-2 mb-4"
        onSubmit={handleSubmit}
    >
        <input type="text" placeholder="add a new task"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-500 rounded-md"
        />

        <button type="submit" className="border-2 border-gray-700 p-2 rounded-md whitespace-nowrap">add task</button>
    </form>
  );
};

export default TodoInput;
