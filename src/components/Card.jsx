import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

import { dotColors } from "../assets/data";

function Card({
  todo,
  deleteTodo,
  handleUpdateClick,
  toggleTodoCompleteStatus,
}) {
  return (
    <div className="flex flex-col gap-3 px-4 py-3 rounded-md bg-amber-100">
      <div className="flex items-center justify-between">
        <h2
          className={
            "font-bold text-lg text-gray-800" +
            (todo.completed ? " line-through" : "")
          }
        >
          {todo.title}
        </h2>
        <div className="flex items-center gap-2">
          <AiOutlineEdit
            size={20}
            onClick={() => handleUpdateClick(todo.id)}
            className="text-gray-800 cursor-pointer"
          />
          <AiOutlineDelete
            size={20}
            onClick={() => deleteTodo(todo.id)}
            className="text-gray-800 cursor-pointer"
          />
        </div>
      </div>

      <p className={"text-gray-700" + (todo.completed ? " line-through" : "")}>
        {todo.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-2">
          {todo.labels.map((label, index) => (
            <div
              key={index}
              className={`rounded-full w-4 h-4 ${dotColors[label]} border-none outline-none`}
            ></div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm">done</label>
          <input
            type="checkbox"
            name="completed-todo-input"
            className="rounded-md bg-transparent border-black cursor-pointer accent-yellow-900 focus:ring-amber-100"
            checked={todo.completed}
            onChange={() => toggleTodoCompleteStatus(todo.id)}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
