import { AiOutlinePlus } from "react-icons/ai";

import { labels, bgColors, borderColor } from "../assets/data";

function Header({ toggleOpenNewTodoForm, filterTodos, resetFilterTodos }) {
  const labelElements = labels.map((label, index) => (
    <button
      key={index}
      className={`px-3 py-3 rounded-full border ${borderColor[label]} ${bgColors[label]}`}
      onClick={filterTodos}
    >
      {label}
    </button>
  ));

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-4xl font-bold">todo</h1>
        <AiOutlinePlus
          size={30}
          className="cursor-pointer"
          onClick={toggleOpenNewTodoForm}
        />
      </div>
      <div className="flex items-center justify-around mb-3">
        {labelElements}
        <button
          className="bg-transparent px-3 py-2 rounded-full border border-gray-700"
          onClick={resetFilterTodos}
        >
          reset
        </button>
      </div>
    </header>
  );
}

export default Header;
